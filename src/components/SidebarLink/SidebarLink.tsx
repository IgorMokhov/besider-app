import { NavLink } from 'react-router';
import { ISidebarLink } from '../../types/sidebar';
import styles from './SidebarLink.module.scss';

interface ISidebarLinkProps extends ISidebarLink {}

export const SidebarLink = ({ name, path }: ISidebarLinkProps) => {
  return (
    <li className={styles.side_item}>
      <NavLink to={path}>{name.toUpperCase()}</NavLink>
    </li>
  );
};
