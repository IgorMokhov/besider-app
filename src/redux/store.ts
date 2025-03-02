import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebar/sidebarSlice';
import { newsApi } from './api/news/newsApi';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
