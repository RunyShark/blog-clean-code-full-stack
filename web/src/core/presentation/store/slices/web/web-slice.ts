import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BlogEntity } from '../../../../domain/entities';

interface WebState {
  blogDataControl: BlogDataControl;
  httpControl: HttpControl;
}

interface BlogDataControl {
  blogs: BlogEntity[];
  filteredBlogs: BlogEntity[];
  currentBlog: BlogEntity;
  isActiveFilter: boolean;
}

interface HttpControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  internetConnection: boolean;
}

const initialState: WebState = {
  blogDataControl: {
    blogs: [],
    filteredBlogs: [],
    isActiveFilter: false,
    currentBlog: {
      id: '',
      title: '',
      author: '',
      content: '',
      imgUrl: '',
      dateOfPublication: '',
    },
  },
  httpControl: {
    loading: false,
    error: false,
    errorMessage: '',
    internetConnection: true,
  },
};

export const webSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    setBlog: (state, { payload }: PayloadAction<BlogEntity[]>) => {
      state.blogDataControl.blogs = payload;
      state.blogDataControl.filteredBlogs = payload;
    },

    getByIdBlog: (state, { payload }: PayloadAction<string>) => {
      state.blogDataControl.currentBlog = state.blogDataControl.blogs.find(
        (blog) => blog.id === payload
      )!;
    },

    filterBlog: (state, { payload }: PayloadAction<string>) => {
      state.blogDataControl.isActiveFilter = true;
      state.blogDataControl.filteredBlogs = state.blogDataControl.blogs.filter(
        (blog) => {
          if (blog.title.toLowerCase().includes(payload.toLowerCase()))
            return true;

          if (blog.author.toLowerCase().includes(payload.toLowerCase()))
            return true;

          if (blog.content.toLowerCase().includes(payload.toLowerCase()))
            return true;
        }
      );
    },

    setInternetConnectionState: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.httpControl.internetConnection = payload;
    },

    updateBlogData: (state, { payload }: PayloadAction<BlogEntity>) => {
      state.blogDataControl.blogs.push(payload);
      state.blogDataControl.filteredBlogs = state.blogDataControl.blogs;
    },

    setLoadingState: (state) => {
      state.httpControl.loading = !state.httpControl.loading;
    },

    setErrorState: (state, { payload }: PayloadAction<string>) => {
      state.httpControl.error = true;
      state.httpControl.errorMessage = payload;
    },

    resetErrorState: (state) => {
      state.httpControl.error = false;
      state.httpControl.errorMessage = '';
    },

    clearFilter: (state) => {
      state.blogDataControl.filteredBlogs = state.blogDataControl.blogs;
    },
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
