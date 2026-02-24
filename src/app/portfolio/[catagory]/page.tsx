import Button from "@/app/components/Button/Button";
import Image from "next/image";
import styles from "./catagory.module.css";

export default async function Cat({
  params,
}: {
  params: { catagory: String };
}) {
  const cat = await params;
  const data = [
    {
      id: 1,
      title: "Creative Portfolio",
      desc: "A visually stunning collection of modern design and creative thinking that captures the essence of imagination and innovation.",
      img: "https://picsum.photos/id/1015/800/600", // stable picsum image by id
      alt: "creative portfolio image",
      link: "/portfolio/1",
    },
    {
      id: 2,
      title: "Nature & Serenity",
      desc: "Beautiful natural landscapes showcasing mountains, forests, and lakes that bring peace and inspiration to the viewer.",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      alt: "nature and serenity",
      link: "/portfolio/2",
    },
    {
      id: 3,
      title: "Urban Lifestyle",
      desc: "Capturing the fast-paced rhythm of modern city life — architecture, streets, and the stories within urban spaces.",
      img: "https://picsum.photos/id/1036/600/400",
      alt: "urban lifestyle",
      link: "/portfolio/3",
    },
    {
      id: 4,
      title: "Tech & Innovation",
      desc: "Exploring futuristic concepts, digital transformation, and the technology shaping the next generation.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      alt: "tech and innovation",
      link: "/portfolio/4",
    },
    {
      id: 5,
      title: "Abstract Art",
      desc: "A blend of colors, patterns, and imagination — celebrating creativity without limits.",
      img: "https://picsum.photos/id/1025/800/600",
      alt: "abstract art",
      link: "/portfolio/5",
    },
  ];

  return (
    <div>
      <h2 className={styles.catagory}> {cat.catagory}</h2>
      {data.map((item) => {
        return (
          <div className={styles.container} key={item.id}>
            <div className={styles.desc}>
              <h1 className={styles.title}> {item.title}</h1>
              <p> {item.desc}</p>
              <Button text="see more" />
            </div>
            <div className={styles.img}>
              <Image src={item.img} alt="" width={300} height={500} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
