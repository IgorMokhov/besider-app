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
