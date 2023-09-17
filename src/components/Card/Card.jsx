import Link from "next/link";
import Image from "next/image";

import styles from "@/components/Card/Card.module.css";


const Card = ({imageUrl, url, title, description}) => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>
        <Image
        src={imageUrl}
        width={300}
        height={300}
        alt="Picture of the author"/>
      </div>
      <div className={styles.back}>
        <div className={styles.backContent}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
          <Link href={url} target="_blank" className={styles.link}>View the resource</Link>
        </div>
      </div>
    </div>
  )
}

export default Card;