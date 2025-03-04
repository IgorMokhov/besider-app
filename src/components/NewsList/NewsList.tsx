import React, { useEffect, useState } from 'react';
import { useLazyGetNewsQuery } from '../../redux/api/news/newsApi';
import { extractNewsData, groupByDate } from '../../utils/newsUtils';
import { NewsItem } from '../NewsItem/NewsItem';
import { Loader } from '../../UI/Loader/Loader';
import { useInView } from 'react-intersection-observer';
import { IError } from '../../types/errors';
import { Error } from '../../UI/Error/Error';
import { IArticle } from '../../types/news';
import styles from './NewsList.module.scss';
import {
  CURRENT_MONTH,
  CURRENT_YEAR,
  VISIBLE_COUNT,
} from '../../redux/api/news/config';

export const NewsList = () => {
  const [news, setNews] = useState<IArticle[]>([]);
  const [getNews, { data, isSuccess, isError, error, isLoading }] =
    useLazyGetNewsQuery();
  const [visibleCount, setVisibleCount] = useState<number>(VISIBLE_COUNT);
  const { ref, inView } = useInView({ threshold: 1 });

  const newsData = extractNewsData(news || []);
  const visibleNews = newsData.slice(0, visibleCount);
  const groupedNews = groupByDate(visibleNews);

  useEffect(() => {
    if (isSuccess && data) setNews(data.response.docs);
    if (isError && error) console.log(error);
  }, [isSuccess, isError, data, error]);

  useEffect(() => {
    if (inView) setVisibleCount((prev) => prev + VISIBLE_COUNT);

    const isAllNewsVisible = news.length > 0 && visibleCount >= news.length;
    if (isAllNewsVisible) {
      let prevMonth = CURRENT_MONTH - 1;
      let prevYear = CURRENT_YEAR;

      if (prevMonth === 0) {
        prevMonth = 12;
        prevYear -= 1;
      }

      getNews({ year: prevYear, month: prevMonth })
        .unwrap()
        .then((res) => setNews((prev) => prev.concat(res.response.docs)))
        .catch((error) => console.log(error));
    }
  }, [inView, news.length]);

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
  if (isError) return <Error errorMessage={(error as IError).error} />;

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
