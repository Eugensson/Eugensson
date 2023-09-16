"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from '@/components/SoftSkillsList/SoftSkillsList.module.css';

const SoftSkillsList = ({ softSkillsLinks }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.list}>
      {softSkillsLinks.map(link => {
        const isActive = pathname === link.href;

        const linkClassName = `${styles.item} ${isActive ? styles.active : ''}`;

        return (
          <li key={link.label}>
            <Link href={link.href} className={linkClassName}>
              <h2>{link.label}</h2>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { SoftSkillsList };