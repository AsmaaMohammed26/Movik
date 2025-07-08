import { useEffect, useState } from "react";
import { getApiData } from "../APIs/axiosInstance";
import { movieURL, tvURL, personURL } from "../APIs/ApisURL";
import LoadingCard from "../components/LoadingCard";
import CardContainer from "../components/CardContainer/CardContainer";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const [movies, setMovies] = useState([]);
  const [tv, setTv] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getApiData(movieURL, setMovies);
    getApiData(tvURL, setTv);
    getApiData(personURL, setPeople);
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <LoadingCard elementName={t("movies")} />
      ) : (
        <CardContainer element={movies} elementName={t("movies")} />
      )}
      {tv.length === 0 ? (
        <LoadingCard elementName={t("tv")}/>
      ) : (
        <CardContainer element={tv} elementName={t("tv")} />
      )}
      {people.length === 0 ? (
        <LoadingCard  elementName={t("people")} />
      ) : (
      
        <CardContainer element={people} elementName={t("people")} isImagePerson={true} />

      )}
    </>
  );
}
