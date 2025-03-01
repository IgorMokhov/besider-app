import { configureStore } from '@reduxjs/toolkit';
import { sidebarReducer } from './slices/sidebar/sidebarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
