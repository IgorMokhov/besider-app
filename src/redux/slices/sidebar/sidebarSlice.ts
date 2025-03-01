import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface ISidebarState {
  isOpen: boolean;
}

const initialState: ISidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpen = true;
    },
    closeSidebar: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;
export const selectSidebar = (state: RootState) => state.sidebar.isOpen;
export const sidebarReducer = sidebarSlice.reducer;
