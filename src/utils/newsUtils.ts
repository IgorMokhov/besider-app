import { IArticle, IMultimedia, INewsItem } from '../types/news';
import loadingImg from '../assets/loading-img.png';

export const formatDate = (date: string) => {
  const newDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };

  return newDate
    .toLocaleString('en-US', options)
    .replace(',', '')
    .replace(':', '.');
};

export const getImageUrl = (multimedia: IMultimedia[]) => {
  if (!multimedia.length) return loadingImg;

  const baseUrl = 'https://static01.nyt.com/';
  const path =
    multimedia.find((i) => i.subType === 'thumbLarge')?.url ||
    multimedia.find((i) => i.subType === 'thumbnail')?.url;

  return path ? `${baseUrl}${path}` : loadingImg;
};

export const extractNewsData = (data: IArticle[]): INewsItem[] => {
  return data
    ?.map((article) => ({
      title: article.abstract,
      url: article.web_url,
      date: formatDate(article.pub_date),
      source: article.source,
      imageUrl: getImageUrl(article.multimedia),
    }))
    .reverse();
};
