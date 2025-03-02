import { Link } from 'react-router';
import { INewsItem } from '../../types/news';
import styles from './NewsItem.module.scss';

interface INewsItemProps extends INewsItem {}

export const NewsItem = ({
  date,
  imageUrl,
  source,
  title,
  url,
}: INewsItemProps) => {
  return (
    <li>
      <Link to={url} target="_blank">
        <article className={styles.article}>
          <img className={styles.article_img} src={imageUrl} alt="photo" />
          <div className={styles.article_content}>
            <h4 className={styles.article_source}>{source}</h4>
            <p className={styles.article_text}>
              {title.length > 140 ? `${title.slice(0, 140)}...` : title}
            </p>
            <span className={styles.article_date}>{date}</span>
          </div>
        </article>
      </Link>
    </li>
  );
};
