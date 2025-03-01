import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  return <main className={styles.container}>{children}</main>;
};
