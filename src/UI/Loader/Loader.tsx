import loadingIcon from '../../assets/icons/loading-icon.svg';
import styles from './Loader.module.scss';

interface ILoaderProps {}

export const Loader = ({}: ILoaderProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.loader} src={loadingIcon} alt="loader" />
    </div>
  );
};
