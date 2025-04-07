import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeSidebar, selectSidebar } from '../../redux/slices/sidebar/sidebarSlice';
import closeIcon from '../../assets/icons/close-icon.svg';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import { links } from '../../data/links';
import styles from './Sidebar.module.scss';

export const Sidebar = () => {
  const isOpen = useAppSelector(selectSidebar);
  const dispatch = useAppDispatch();

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
      <button className={styles.sidebar_closeBtn} onClick={() => dispatch(closeSidebar())}>
        <img src={closeIcon} alt="close" />
      </button>
      <nav>
        <ul className={styles.sidebar_list}>
          {links.map(({ name, path }) => (
            <SidebarLink name={name} path={path} key={name} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
