import CheckBoxIcon from '@mui/icons-material/CheckBox';

import styles from "@/app/page.module.css"

export default function Home() {
  return (
    <section className="section">
      <h1 className="visuallyHidden">About</h1>
      <p className="text">Let me introduce myself. My name is Serhii. I am a novice full-stack developer, enthusiastic about continuous learning and career advancement. I possess fundamental knowledge in HTML, CSS, JavaScript, React, Next and Node. My eagerness lies in broadening my skillset and collaborating within the Agile/Scrum framework to ensure timely and cost-effective project deliveries. My objective is to design user-friendly interfaces that offer a smooth user experience. I excel in addressing challenges in dynamic settings and aspire to make a constructive impact in both personal and professional spheres. I am diligent, quick to acquire new skills, and prepared to undertake any responsibility.</p>
      
      <h2>Project experience</h2>

      <h2>Work experience</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.text}>2009-2022</p>          
          <p className={styles.text}>
            <b>Ukrecoproject, ltd</b>
            Operating Manager
            <span className={styles.descr}><CheckBoxIcon fontSize="small"/>Organization and management of the project team.</span>
            <span className={styles.descr}><CheckBoxIcon fontSize="small"/>Maintenance of work documentation (calendar plans, specifications, road maps, financial reports, etc.).</span>
            <span className={styles.descr}><CheckBoxIcon fontSize="small"/>Participation in tenders and negotiations.</span>
            <span className={styles.descr}><CheckBoxIcon fontSize="small"/>Communication with the customer (agreement of terms, plans, key requirements for the project).</span>
            <span className={styles.descr}><CheckBoxIcon fontSize="small"/>Control over project implementation (adherence to quality, deadlines, budget).</span>
          </p>

          

        </li>        
      </ul>
      
      <h2>Education</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.text}>2022-2023</p>          
          <p className={styles.text}><b>GoIT</b>Full-stack developer</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>1999-2001</p>          
          <p className={styles.text}><b>Cherkasy State Technological University</b>Business Economics, Manager</p>
        </li>
        <li className={styles.item}>
          <p className={styles.text}>1996-2001</p>          
          <p className={styles.text}><b>Cherkasy State Technological University</b>Environmental engineer, Specialist</p>
        </li>
      </ul>
      
      <h2>Languages</h2>
      <ul className={styles.list}>
        <li className={styles.descr}><CheckBoxIcon fontSize="small"/><p className="text">English - Pre-Intermediate</p></li>
        <li className={styles.descr}><CheckBoxIcon fontSize="small"/><p className="text">Ukrainian - Native</p></li>
        <li className={styles.descr}><CheckBoxIcon fontSize="small"/><p className="text">Polish - Upper-Intermediate</p></li>
        <li className={styles.descr}><CheckBoxIcon fontSize="small"/><p className="text">Russian - Advanced</p></li>          
      </ul>
    </section>
  )
}
