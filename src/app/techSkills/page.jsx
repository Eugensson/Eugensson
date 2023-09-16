import Image from "next/image";

import styles from "@/app/techSkills/page.module.css"
import CardSvg from "@/components/CardSvg/CardSvg";

const TechSkills = () => {
    return (
      <section className="section">
        <h1>What Are Included in My Tech Skills?</h1>
        <h2>Front-end</h2>      
        <ul className={styles.techSkillsList}>          
          <li><CardSvg src="/html.svg" alt="Icon HTML" label="HTML" priority /></li>
          <li><CardSvg src="/css.svg" alt="Icon CSS" label="CSS" /></li>
          <li><CardSvg src="/js.svg" alt="Icon JS" label="JavaScript" /></li>
          <li><CardSvg src="/typescript.svg" alt="Icon typescript" label="TypeScript" /></li>
          <li><CardSvg src="/react.svg" alt="Icon React" label="React" /></li>
          <li><CardSvg src="/nextjs.svg" alt="Icon Next" label="Next JS" /></li>
          <li><CardSvg src="/reactNative.svg" alt="Icon React Native" label="React Native" /></li>
          <li><CardSvg src="/redux.svg" alt="Icon Redux" label="Redux" /></li>
          <li><CardSvg src="/restApi.svg" alt="Icon Rest Api" label="REST API" /></li>
          <li><CardSvg src="/formik.svg" alt="Icon Formik" label="Formik" /></li>
          <li><CardSvg src="/reactHooksForm.svg" alt="Icon React Hooks Form.svg" label="React Hooks Form" /></li>
          <li><CardSvg src="/swiper.svg" alt="Icon Swiper" label="Swiper" /></li>
          <li><CardSvg src="/handlebars.svg" alt="Icon Handlebars"  label="Handlebars" /></li>
          <li><CardSvg src="/lodash.svg" alt="Icon Lodash" label="Lodash" /></li>
          <li><CardSvg src="/mui.svg" alt="Icon Mui" label="Material UI" /></li>
          <li><CardSvg src="/strapi.svg" alt="Icon Strapi" label="Strapi" /></li>
          <li><CardSvg src="/bootstrap.svg" alt="Icon Bootstrap" label="Bootstrap" /></li>
          <li><CardSvg src="/stylelint.svg" alt="Icon Stylelint" label="Stylelint" /></li>
          <li><CardSvg src="/sass.svg" alt="Icon SASS" label="SASS" /></li>
          <li><CardSvg src="/less.svg" alt="Icon LESS" label="LESS" /></li>
          <li><CardSvg src="/bem.svg" alt="Icon BEM" label="B_E_M" /></li>
        </ul>
        <h2>Back-end</h2>
        <ul className={styles.techSkillsList}>
          <li><CardSvg src="/nodejs.svg" alt="Icon NodeJS" label="NodeJS" /></li>
          <li><CardSvg src="/express.svg" alt="Icon Express" label="Express" /></li>
          <li><CardSvg src="/vercel.svg" alt="Icon Vercel" label="Vercel" /></li>
          <li><CardSvg src="/docker.svg" alt="Icon Docker" label="Docker" /></li>
          <li><CardSvg src="/mongodb.svg" alt="Icon MongoDB" label="MongoDB" /></li>
          <li><CardSvg src="/mariadb.svg" alt="Icon MariaDB" label="MariaDB" /></li>
          <li><CardSvg src="/cloudinary.svg" alt="Icon Cloudinary" label="Cloudinary" /></li>
          <li><CardSvg src="/swagger.svg" alt="Icon Swagger" label="Swagger" /></li>  
        </ul>
        <h2>Tools</h2>
        <ul className={styles.techSkillsList}>
          <li><CardSvg src="/vscode.svg" alt="Icon VSCode" label="Visual Studio Code" /></li>
          <li><CardSvg src="/wp.svg" alt="Icon WP" label="WEB Pack" /></li>
          <li><CardSvg src="/parcel.svg" alt="Icon Parcel" label="Parcel" /></li>
          <li><CardSvg src="/postman.svg" alt="Icon Postman" label="Postman" /></li>
          <li><CardSvg src="/npm.svg" alt="Icon NPM" label="NPM" /></li>
          <li><CardSvg src="/git.svg" alt="Icon GIT" label="GIT" /></li>
          <li><CardSvg src="/slack.svg" alt="Icon Slack" label="Slack" /></li>
          <li><CardSvg src="/figma.svg" alt="Icon Figma" label="Figma" /></li>
          <li><CardSvg src="/trello.svg" alt="Icon Trello" label="Trello" /></li>
          <li><CardSvg src="/jira.svg" alt="Icon Jira" label="Jira" /></li>          
        </ul>
      </section>
    )
  }
  
  export default TechSkills;