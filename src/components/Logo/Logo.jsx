import Link from "next/link";

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import styles from "@/components/Logo/Logo.module.css"

const Logo = () => {
  return (
    <Link href="/" aria-label="Іконка електронної скрині" className={styles.logoText}><AlternateEmailIcon fontSize="small"/>Eugensson</Link>
  )
}

export default Logo