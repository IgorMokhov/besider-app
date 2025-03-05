import React, { useEffect, useState } from 'react';
import { useLazyGetNewsQuery } from '../../redux/api/news/newsApi';
import { extractNewsData, groupByDate } from '../../utils/newsUtils';
import { NewsItem } from '../NewsItem/NewsItem';
import { Loader } from '../../UI/Loader/Loader';
import { useInView } from 'react-intersection-observer';
import { IError } from '../../types/errors';
import { Error } from '../../UI/Error/Error';
import { INewsItem } from '../../types/news';
import {
  CURRENT_MONTH,
  CURRENT_YEAR,
  VISIBLE_COUNT,
} from '../../redux/api/news/config';
import styles from './NewsList.module.scss';

export const NewsList = () => {
  const [getNews, { data, isSuccess, isError, error: errorNews, isLoading }] =
    useLazyGetNewsQuery();
  const { ref, inView } = useInView({ threshold: 1 });

  const [news, setNews] = useState<INewsItem[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);
  const isAllNewsVisible = news.length > 0 && visibleCount >= news.length;

  const visibleNews = news.slice(0, visibleCount);
  const groupedNews = groupByDate(visibleNews);

  useEffect(() => {
    if (inView) setVisibleCount((prev) => prev + VISIBLE_COUNT);

    if (isAllNewsVisible) {
      let newMonth = CURRENT_MONTH - 1;
      let newYear = CURRENT_YEAR;

      if (newMonth === 0) {
        newMonth = 12;
        newYear -= 1;
      }

      setError(null);
      getNews({ year: newYear, month: newMonth })
        .unwrap()
        .then((res) =>
          setNews((prev) => prev.concat(extractNewsData(res.response.docs)))
        )
        .catch((error) => setError((error as IError).error));
    }
  }, [inView, isAllNewsVisible]);

  useEffect(() => {
    if (isSuccess) setNews(extractNewsData(data.response.docs));
  }, [isSuccess]);

  useEffect(() => {
    if (isError && errorNews) setError((errorNews as IError).error);
  }, [isError, errorNews]);

  useEffect(() => {
    const interval = setInterval(() => {
      getNews({ year: CURRENT_YEAR, month: CURRENT_MONTH });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getNews({ year: CURRENT_YEAR, month: CURRENT_MONTH }).unwrap();
  }, []);

  if (isLoading) return <Loader />;
  if (error) return <Error errorMessage={error} />;

  return (
    <section className={styles.news}>
      {Object.entries(groupedNews).map(([date, articles]) => (
        <React.Fragment key={date}>
          <h4 className={styles.news_date}>News for {date.replace(',', '')}</h4>
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
