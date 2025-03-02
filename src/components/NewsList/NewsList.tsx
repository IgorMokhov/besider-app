import React from 'react';
import { useGetNewsQuery } from '../../redux/api/news/newsApi';
import { extractNewsData, groupByDate } from '../../utils/newsUtils';
import { NewsItem } from '../NewsItem/NewsItem';
import styles from './NewsList.module.scss';

export const NewsList = () => {
  const { data } = useGetNewsQuery();
  const newsData = extractNewsData(data?.response.docs || []);
  const groupedNews = groupByDate(newsData);

  return (
    <section className={styles.news}>
      {Object.entries(groupedNews).map(([date, articles]) => (
        <React.Fragment key={date}>
          <h4 className={styles.news_date}>News for {date}</h4>
          <ul className={styles.news_list}>
            {articles.map((article) => (
              <NewsItem {...article} key={article.url} />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </section>
  );
};
