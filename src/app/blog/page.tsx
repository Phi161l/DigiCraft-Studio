import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";

export default function Blog() {
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

  return (
    <div>
      {data.map((item) => {
        return (
          <Link href=""  className={styles.container} key={item.id}>
            <Image src={item.img} alt="" width={300} height={300} />
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
