import styles from './Header.module.scss';
import menuIcon from '../../assets/icons/menu-icon.svg';
import { useAppDispatch } from '../../redux/hooks';
import { openSidebar } from '../../redux/slices/sidebar/sidebarSlice';

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>BESIDER</h1>
      <button
        className={styles.header_button}
        onClick={() => dispatch(openSidebar())}
        aria-label="Open menu"
      >
        <img className={styles.header_button_icon} src={menuIcon} alt="menu" />
      </button>
    </header>
  );
};
