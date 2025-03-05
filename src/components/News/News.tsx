import { Container } from '../../UI/Container/Container';
import { NewsList } from '../NewsList/NewsList';
import styles from './News.module.scss';

export const News = () => {
  return (
    <div className={styles.news}>
      <Container>
        <NewsList />
      </Container>
    </div>
  );
};
