import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    setBlog: (state) => {},

    getByIdBlog: (state) => {},

    filterBlog: (state) => {},

    setInternetConnectionState: (state) => {},

    updateBlogData: (state) => {},

    setLoadingState: (state) => {},

    setErrorState: (state) => {},

    resetErrorState: (state) => {},

    clearFilter: (state) => {},
  },
});

export const {
  filterBlog,
  setBlog,
  updateBlogData,
  setLoadingState,
  setErrorState,
  resetErrorState,
  setInternetConnectionState,
  getByIdBlog,
  clearFilter,
} = webSlice.actions;

export default webSlice.reducer;
