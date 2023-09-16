import Link from 'next/link';

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PlaceIcon from '@mui/icons-material/Place';

import styles from "@/app/contacts/page.module.css"

const Contacts = () => {
  return (
    <section className="section">
        <h1 className="visuallyHidden">Contacts</h1>
        <ul className={styles.list}>
          <li><Link className={styles.link} href="tel:+380633062931" aria-label="Phone icon"><PhoneIphoneIcon />+38-063-3062931</Link></li>
          <li><Link className={styles.link} href="mailto:s.kulbashnyi@gmail.com" aria-label="Email icon"><EmailIcon />s.kulbashnyi@gmail.com</Link></li>
          <li><Link className={styles.link} href="https://t.me/Eugensson/" target="_blank" aria-label="Telegram icon"><TelegramIcon />Telegram</Link></li>
          <li><Link className={styles.link} href="https://facebook.com/" target="_blank" aria-label="Facebook iconk"><FacebookIcon />Facebook</Link></li>
          <li><Link className={styles.link} href="https://www.linkedin.com/in/serhii-kulbashnyi/" target="_blank" aria-label="LinkedIn icon"><LinkedInIcon />LinkedIn</Link></li>
          <li><Link className={styles.link} href="https://github.com/Eugensson/" target="_blank" aria-label="GitHub icon"><GitHubIcon />GitHub</Link></li>
          <li className={styles.link}><PlaceIcon aria-label="Location icon"/>Cherkasy, Ukraine</li>
        </ul>
    </section>
  )
}


export default Contacts;