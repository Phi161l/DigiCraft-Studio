import Image from "next/image";
import styles from "./blogDetail.module.css";
import { notFound } from "next/navigation";
import Post from "@/models/Post";
import connect from "@/lib/db";

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  await connect();

  const { id } = await params; 

  const blog = await Post.findById(id);

  if (!blog) {
    notFound();
  }

  return (
    <div className={styles.container}>
      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <h1>{blog.title}</h1>
        <p className={styles.desc}>{blog.desc}</p>

        <div className={styles.author}>
          <Image
            src={blog.image}
            alt="author"
            width={40}
            height={40}
            className={styles.authorImage}
          />
          <span>Ibrahim</span>
        </div>

        {/* ✅ CONTENT SECTION */}
        <div className={styles.content}>{blog.content}</div>
      </div>

      {/* LEFT SIDE */}
      <div className={styles.left}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={500}
          className={styles.mainImage}
          priority
        />
      </div>
    </div>
  );
}
