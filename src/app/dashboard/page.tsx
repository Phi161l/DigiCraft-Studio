"use client";

import { useState } from "react";
import styles from "./dashboard.module.css";

type Post = {
  title: string;
  desc: string;
  image: string;
  content: string;
};

export default function Dashboard() {
  const [post, setPost] = useState<Post>({
    title: "",
    desc: "", 
    image: "",
    content: "",
  });

  const [posts, setPosts] = useState<Post[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    });

    if (res.ok) {
      setPosts([post, ...posts]); // instantly show on left
      setPost({ title: "", desc: "", image: "", content: "" });
    }
  };

  return (
    <main className={styles.container}>
      {/* LEFT SIDE - Preview */}
      <div className={styles.previewSection}>
        {posts.map((p, index) => (
          <div key={index} className={styles.postCard}>
            {p.image && (
              <img src={p.image} alt={p.title} className={styles.postImage} />
            )}
            <div>
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
            <span className={styles.delete}  onClick={()=> alert("clicked")}>✕</span>
          </div>
        ))}
      </div>

      {/* RIGHT SIDE - FORM */}
      <div className={styles.formSection}>
        <h1>Add New Post</h1>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Title"
            value={post.title}
            onChange={handleChange}
            required
          />

          <input
            name="desc"
            placeholder="Desc"
            value={post.desc}
            onChange={handleChange}
            required
          />

          <input
            name="image"
            placeholder="Image URL"
            value={post.image}
            onChange={handleChange}
          />

          <textarea
            name="content"
            placeholder="Content"
            rows={6}
            value={post.content}
            onChange={handleChange}
            required
          />

          <button type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}