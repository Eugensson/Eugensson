import Link from 'next/link';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
      <footer className="footer">
        <ul className="footerList">
            <li className="footerItem"><Link href="mailto:s.kulbashnyi@gmail.com" aria-label="Іконка електронної скрині"><AlternateEmailIcon fontSize="large"/></Link></li>
            <li className="footerItem"><Link href="https://t.me/Eugensson/" target="_blank" aria-label="Іконка Telegram"><TelegramIcon fontSize="large"/></Link></li>
            <li className="footerItem"><Link href="https://facebook.com/" target="_blank" aria-label="Іконка Facebook"><FacebookIcon fontSize="large"/></Link></li>
            <li className="footerItem"><Link href="https://www.linkedin.com/in/serhii-kulbashnyi/" target="_blank" aria-label="Іконка linkedIn"><LinkedInIcon fontSize="large"/></Link></li>
            <li className="footerItem"><Link href="https://github.com/Eugensson/" target="_blank" aria-label="Іконка GitHub"><GitHubIcon fontSize="large"/></Link></li>
        </ul>

        <p className="footerLicense">Create by &copy;Eugensson</p>
      </footer>
    )
  }
  
  export default Footer;