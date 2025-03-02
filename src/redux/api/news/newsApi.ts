import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetNewsResponse } from '../../../types/news';
import { API_KEY, BASE_URL, MONTH, PROXY_URL, YEAR } from './config';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PROXY_URL}${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<IGetNewsResponse, void>({
      query: () => `/${YEAR}/${MONTH}.json?api-key=${API_KEY}`,
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
