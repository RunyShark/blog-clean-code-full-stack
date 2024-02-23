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
  isNewBlog: boolean;
}

interface HttpControl {
  loading: boolean;
  error: boolean;
  errorMessage: string;
  internetConnection: boolean;
}

const currentBlog = {
  id: '',
  title: '',
  author: '',
  content: '',
  imgUrl: '',
  dateOfPublication: '',
  photoAuthor: '',
};

const initialState: WebState = {
  blogDataControl: {
    blogs: [],
    filteredBlogs: [],
    isActiveFilter: false,
    currentBlog: {
      ...currentBlog,
    },
    isNewBlog: false,
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
      state.blogDataControl.isActiveFilter = false;
      state.blogDataControl.blogs = payload;
      state.blogDataControl.filteredBlogs = payload;
      state.blogDataControl.currentBlog = currentBlog;
      state.blogDataControl.isNewBlog = false;
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

    updateBlogById: (state, { payload }: PayloadAction<BlogEntity>) => {
      state.blogDataControl.blogs = state.blogDataControl.blogs.map((blog) =>
        blog.id === payload.id ? payload : blog
      );
      state.blogDataControl.filteredBlogs = state.blogDataControl.blogs;
      state.blogDataControl.currentBlog = payload;
    },

    setLoadingState: (state, { payload }: PayloadAction<boolean>) => {
      state.httpControl.loading = payload;
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
      state.blogDataControl.isActiveFilter = false;
    },

    deleteBlog: (state, { payload }: PayloadAction<string>) => {
      state.blogDataControl.blogs = state.blogDataControl.blogs.filter(
        (blog) => blog.id !== payload
      );
      state.blogDataControl.filteredBlogs = state.blogDataControl.blogs;
    },

    restartNewBlog: (state) => {
      state.blogDataControl.isNewBlog = false;
    },

    setNewBlog: (state) => {
      state.blogDataControl.isNewBlog = true;
    },
  },
});

export const {
  restartNewBlog,
  filterBlog,
  setBlog,
  updateBlogData,
  setLoadingState,
  setErrorState,
  resetErrorState,
  setInternetConnectionState,
  getByIdBlog,
  clearFilter,
  deleteBlog,
  updateBlogById,
  setNewBlog,
} = webSlice.actions;

export default webSlice.reducer;
