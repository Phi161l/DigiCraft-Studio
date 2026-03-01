import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";
import Post from "@/models/Post";
import connect  from "@/lib/db";

export default async function Blog() {
  await connect()
  const data = await Post.find()

  return (
    <div>
      {data.map((item) => {
        return (
          <Link href={`/blog/${item._id}`} className={styles.container} key={item._id}>
            <Image src={item.image} alt="" width={300} height={300} />
            <div className={styles.left}>
              <h2 className={styles.title}> {item.title} </h2>
              <p className={styles.desc}> {item.desc} </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
