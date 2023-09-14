import Logo from "@/components/Logo";
import { Navigation } from '@/components/Navigation';
import { navItems } from '@/data/navItems';

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation navLinks={navItems} />
    </header>
  )
}

export default Header;