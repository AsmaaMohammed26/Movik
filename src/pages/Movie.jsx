import CardContainer from "../components/CardContainer/CardContainer";
import { useEffect, useState } from "react";
import { getApiData } from "../APIs/axiosInstance";
import { movieURL } from "../APIs/ApisURL";
import LoadingCard from "../components/LoadingCard";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getApiData(movieURL, setMovies);
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <LoadingCard />
      ) : (
        <CardContainer element={movies} />
      )}
    </>
  );
};

export default Movie;
