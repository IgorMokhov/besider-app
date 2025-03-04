import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGetNewsRequest, IGetNewsResponse } from '../../../types/news';
import { API_KEY, BASE_URL, PROXY_URL } from './config';

export const newsApi = createApi({
  reducerPath: 'news',
  baseQuery: fetchBaseQuery({
    baseUrl: `${PROXY_URL}${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    getNews: builder.query<IGetNewsResponse, IGetNewsRequest>({
      query: ({ year, month }) => `/${year}/${month}.json?api-key=${API_KEY}`,
    }),
  }),
});

export const { useLazyGetNewsQuery } = newsApi;
