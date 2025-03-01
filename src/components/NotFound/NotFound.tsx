import { NavLink } from 'react-router';
import styles from './NotFound.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <p>Page not found</p>
      <NavLink className={styles.notfound_link} to="/">Back to Home</NavLink>
    </div>
  );
};
