import Card from "@/components/Card/Card";

import styles from "@/app/portfolio/page.module.css";

const Portfolio = () => {
    return (
      <section className="section">
        <h1>Portfolio</h1>
        <h2>Individual educational projects</h2>
        <ul className={styles.list}>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
        </ul>        
        <h2>Team educational projects</h2>
        <ul className={styles.list}>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
        </ul>
        <h2>Commercial projects</h2>
        <ul className={styles.list}>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
          <li><Card/></li>
        </ul>
      </section>
    )
  }
  
  export default Portfolio;