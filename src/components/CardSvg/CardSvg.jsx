import Image from "next/image";

import styles from  "@/components/CardSvg/CardSvg.module.css";

const CardSvg = ({src, alt, label}) => {  
    return (
    <div className={styles.card}>
      <div className={styles.front}>
      <Image src={src} alt={alt} width={100} height={100} />
      </div>      
      <div className={styles.back}>
        <div className={styles.backContent}>
          <p className={styles.label}>{label}</p>          
        </div>
      </div>
    </div>
  )
}

export default CardSvg;