import { type ReactElement } from 'react';
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <Image
        src="./menu.svg"
        alt="menu"
        height={50}
        width={50}
        className={styles.menu}
      />
      <div className={styles.navbarBrand}>
        <div className={styles.logo}>W</div>
        <span className={styles.firstTitle}>W</span>
        <span className={styles.secondTitle}>Pilares</span>
      </div>
      <div className={styles.navbarLinks}>
        <div>Home</div>
        <div>Experience</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Header;
