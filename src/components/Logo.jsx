import Link from "next/link";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Logo = () => {
  return (
    <Link href="/" aria-label="Іконка електронної скрині" className="logoText"><AlternateEmailIcon fontSize="small"/>EUGENSSON</Link>
  )
}

export default Logo