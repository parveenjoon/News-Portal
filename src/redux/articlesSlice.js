import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  articles: [],
  loading: false,
  error: null,
  currentPage: 1,
  articlesPerPage: 10,
  totalArticles: 0,
  currentCategory: 'general', // Default category
};

// Replace 'YOUR_API_KEY' with the actual API key obtained from NewsAPI
const API_KEY = 'f3086529798d4415816356978761e593';

// Define thunk for fetching articles
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async (_, { getState }) => {
    const { currentPage, articlesPerPage, currentCategory } = getState().articles;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${currentCategory}&pageSize=${articlesPerPage}&page=${currentPage}&apiKey=${API_KEY}`
    );
    return response.data;
  }
);

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setCurrentCategory(state, action) {
      state.currentCategory = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.loading = false;
        state.articles = action.payload.articles;
        state.totalArticles = action.payload.totalResults;
        state.error = null;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCurrentPage, setCurrentCategory } = articlesSlice.actions;

export default articlesSlice.reducer;
