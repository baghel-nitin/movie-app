import axios from "axios";
import { setLoading, setMovies } from "./moviesSlice";

export const getMoviewsByPage: any =
  (page: number, setPage: any) => async (dispatch: any) => {
    dispatch(setLoading(true));
    try {
      const response = await axios.get(
        `https://test.create.diagnal.com/data/page${page}.json`
      );
      let data = response.data.page;
      dispatch(setMovies(data));
      setPage((page: any) => page + 1);
    } catch (error) {
      dispatch(setLoading(false));
      console.log(error);
    }
    dispatch(setLoading(false));
  };
