import styles from './Error.module.scss';

interface IErrorProps {
  errorMessage: string | null;
}

export const Error = ({ errorMessage }: IErrorProps) => {
  return <p className={styles.error}>{errorMessage || 'Unknown error'}</p>;
};
