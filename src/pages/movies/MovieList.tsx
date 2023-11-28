import { FC, lazy,Suspense, useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getMoviewsByPage } from "../../store/movies/moviesAPI";
import { clearData } from "../../store/movies/moviesSlice";

import { MovieProps } from "../../components/MovieCard";
const SearchBar = lazy(() => import("../../components/SearchBar"));
const MovieCard = lazy(() => import("../../components/MovieCard"));
const Loader = lazy(() => import("../../components/Loader"));

export interface MovieStateProps {
  data: MovieProps[];
  totalRecords: number;
  title: string;
  loading: boolean;
}

const MovieList: FC<{}> = () => {
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  let movies: MovieProps[] = [];
  const [movieList, setMovieList] = useState(movies);

  const dispatch = useDispatch();

  const { data, totalRecords, title, loading } = useSelector(
    (state: { movies: MovieStateProps }) => state.movies
  );

  // Fetch data from api
  const fetchData = useCallback(async () => {
    dispatch(getMoviewsByPage(page, setPage));
  }, [page, dispatch]);

  useEffect(() => {
    dispatch(getMoviewsByPage(page, setPage));
    return () => {
      clearData();
    };
  }, []);

  useEffect(() => {
    setMovieList(data);
  }, [data]);

  useEffect(() => {
    // Handle scroll action on mouse scroll
    const handleScroll = () => {
      if (data.length === +totalRecords) {
        return;
      }
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data.length, fetchData, totalRecords]);

  // Handle search action for search input
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    // If the user searched for an empty string, display all data.
    if (!value.length) {
      setMovieList(data);
      return;
    }
    const items: any = [...data].filter((movie) => {
      return movie.name.toLowerCase().includes(value.toLowerCase());
    });
    setMovieList(items);
  };

  return (
      <div className="flex w-full flex-col self-center">
        <div className="flex w-full flex-col justify-center">
          <SearchBar
            title={title}
            searchValue={searchValue}
            handleSearch={handleSearch}
          />
          <div className="mx-1 mt-10 flex flex-wrap justify-center gap-2 self-center md:mx-8 y9:gap-5 ">
            {movieList?.map((item: MovieProps, idx: number) => (
              <MovieCard key={idx} item={item} />
            ))}
            {loading && <Loader />}
          </div>
        </div>
      </div>
  );
};

export default MovieList;
