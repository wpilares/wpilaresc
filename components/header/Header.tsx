import { type ReactElement } from 'react';
import styles from './Header.module.scss';

const Header = (): ReactElement => {
  return (
    <div className={styles.header}>
      <div className={styles.navbarBrand}>
        <div>W</div>
        <span>W</span>
        <span>Pilares</span>
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
