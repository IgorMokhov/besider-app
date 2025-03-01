import styles from './Header.module.scss';
import menuIcon from '../../assets/icons/menu-icon.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>BESIDER</h1>
      <button className={styles.header_button} aria-label="Open menu">
        <img className={styles.header_button_icon} src={menuIcon} alt="menu" />
      </button>
    </header>
  );
};
