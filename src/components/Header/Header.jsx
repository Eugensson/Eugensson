import Logo from "@/components/Logo/Logo";
import { Navigation } from '@/components/Navigation/Navigation';
import { navItems } from '@/data/navItems';

import styles from "@/components/Header/Header.module.css"

const Header = () => {
  return (
    <header className={styles.wrapper}>
      <Logo />
      <Navigation navLinks={navItems} />
    </header>
  )
}

export default Header;