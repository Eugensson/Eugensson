import Image from "next/image";

import styles from "@/app/techSkills/page.module.css"

const TechSkills = () => {
    return (
      <section className="section">
        <h1>What Are Included in My Tech Skills?</h1>
        <h2>Front-end</h2>
        <ul className={styles.techSkillsList}>
          <li className={styles.techSkillsItem}><Image src="/html.svg" alt="Icon HTML" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/css.svg" alt="Icon CSS" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/js.svg" alt="Icon JS" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/typescript.svg" alt="Icon typescript" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/react.svg" alt="Icon React" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/nextjs.svg" alt="Icon Next" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/reactNative.svg" alt="Icon React Native" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/redux.svg" alt="Icon Redux" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/restApi.svg" alt="Icon Rest Api" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/formik.svg" alt="Icon Formik" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/reactHooksForm.svg" alt="Icon React Hooks Form.svg" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/swiper.svg" alt="Icon Swiper" width={100} height={100} /></li>         
          <li className={styles.techSkillsItem}><Image src="/handlebars.svg" alt="Icon Handlebars" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/lodash.svg" alt="Icon Lodash" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/mui.svg" alt="Icon Mui" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/strapi.svg" alt="Icon Strapi" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/bootstrap.svg" alt="Icon Bootstrap" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/stylelint.svg" alt="Icon Stylelint" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/sass.svg" alt="Icon SASS" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/less.svg" alt="Icon LESS" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/bem.svg" alt="Icon BEM" width={100} height={100} /></li>
        </ul>
        <h2>Back-end</h2>
        <ul className={styles.techSkillsList}>
          <li className={styles.techSkillsItem}><Image src="/nodejs.svg" alt="Icon NodeJS" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/express.svg" alt="Icon Express" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/vercel.svg" alt="Icon Vercel" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/docker.svg" alt="Icon Docker" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/mongodb.svg" alt="Icon MongoDB" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/mariadb.svg" alt="Icon MariaDB" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/cloudinary.svg" alt="Icon Cloudinary" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/swagger.svg" alt="Icon Swagger" width={100} height={100} /></li>
        </ul>
        <h2>Tools</h2>
        <ul className={styles.techSkillsList}>
          <li className={styles.techSkillsItem}><Image src="/vscode.svg" alt="Icon VSCode" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/wp.svg" alt="Icon WP" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/parcel.svg" alt="Icon Parcel" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/postman.svg" alt="Icon Postman" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/npm.svg" alt="Icon NPM" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/git.svg" alt="Icon GIT" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/slack.svg" alt="Icon Slack" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/figma.svg" alt="Icon Figma" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/trello.svg" alt="Icon Trello" width={100} height={100} /></li>
          <li className={styles.techSkillsItem}><Image src="/jira.svg" alt="Icon Jira" width={100} height={100} /></li>
        </ul>
      </section>
    )
  }
  
  export default TechSkills;