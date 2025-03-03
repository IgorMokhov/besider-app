import React, { useEffect, useState } from 'react';
import { useGetNewsQuery } from '../../redux/api/news/newsApi';
import { extractNewsData, groupByDate } from '../../utils/newsUtils';
import { NewsItem } from '../NewsItem/NewsItem';
import { Loader } from '../../UI/Loader/Loader';
import { useInView } from 'react-intersection-observer';
import styles from './NewsList.module.scss';

export const NewsList = () => {
  const { data, isError, error, isLoading } = useGetNewsQuery();
  const [visibleCount, setVisibleCount] = useState<number>(10);
  const { ref, inView } = useInView({ threshold: 1 });

  const newsData = extractNewsData(data?.response.docs || []);
  const visibleNews = newsData.slice(0, visibleCount);
  const groupedNews = groupByDate(visibleNews);

  useEffect(() => {
    if (inView) setVisibleCount((prev) => prev + 10);
  }, [inView]);

  useEffect(() => {
    if (isError) console.log(error);
  }, [isError]);

  if (isLoading) return <Loader />;

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
      <div className={styles.news_loader} ref={ref}>
        <Loader />
      </div>
    </section>
  );
};
