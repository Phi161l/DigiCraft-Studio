import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import styles from "./blogDetail.module.css"
import { notFound } from "next/navigation";

export default async function BlogDetail({
  params,
}: {
  params: { id: String };
}) {
  const id = (await params).id;
  const data = [
    {
      id: 1,
      title: "Nature is beautiful",
      desc: "Explore the beauty of nature through this breathtaking landscape image, perfect for card layouts and galleries.",
      img: "https://picsum.photos/id/1018/600/400",
    },
    {
      id: 2,
      title: "City skyline view",
      desc: "A stunning shot of the city skyline at dusk, great for modern UI sections and featured card components.",
      img: "https://picsum.photos/id/1025/600/400",
    },
    {
      id: 3,
      title: "Mountain adventure",
      desc: "Capture the thrill of reaching new heights with this mountain adventure placeholder image.",
      img: "https://picsum.photos/id/1036/600/400",
    },
    {
      id: 4,
      title: "Forest trail walk",
      desc: "A serene forest trail perfect for blog covers and nature-themed cards.",
      img: "https://picsum.photos/id/1043/600/400",
    },
    {
      id: 5,
      title: "Ocean horizon",
      desc: "Relaxing ocean horizon shot — ideal for travel sections and inspirational layouts.",
      img: "https://picsum.photos/id/1052/600/400",
    },
  ];

  const blog = data.find((item) => String(item.id) === id);
  if(!blog){
    notFound()
  }

  return (
    <div className={styles.container}>
      {/* RIGHT SIDE */}
      <div className={styles.right}>
        <h1>{blog.title}</h1>
        <p>{blog.desc}</p>

        <div className={styles.author}>
          <Image
            src={blog.img}
            alt="author"
            width={40}
            height={40}
            className={styles.authorImage}
          />
          <span>ibrahim</span>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className={styles.left}>
        <Image
          src={blog.img}
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
