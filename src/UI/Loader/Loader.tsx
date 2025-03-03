import loadingIcon from '../../assets/icons/loading-icon.svg';
import styles from './Loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.loader} src={loadingIcon} alt="loader" />
    </div>
  );
};
