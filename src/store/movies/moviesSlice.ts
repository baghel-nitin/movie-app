import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  totalRecords: 0,
  title: "",
  loading: false,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state: any, action) => {
      let page = action.payload;
      let movies = page["content-items"]?.content;
      state.data = [...state.data, ...movies];
      state.totalRecords = page["total-content-items"]
      state.title = page?.title;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearData: (state) => {
      state.data = [];
    },
  },
});

export const { setMovies, setLoading, clearData } =
  moviesSlice.actions;

export default moviesSlice.reducer;
