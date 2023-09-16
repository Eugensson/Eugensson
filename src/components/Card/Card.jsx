import Link from "next/link";
import Image from "next/image";

import styles from "@/components/Card/Card.module.css"

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.front}>        
      </div>
      <div className={styles.back}>
        <div className={styles.backContent}>
          <h2 className={styles.title}>Title</h2>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda,
            eum! Minima dolorem corrupti ad ducimus. Autem ab quas dignissimos
            odio?
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card;