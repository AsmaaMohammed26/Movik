import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import movieImage from "../../assets/movie.jpg";
import personImage from "../../assets/person.jpg";
import "./CardContainer.css";
import { Link, useNavigate } from "react-router-dom";

export default function CardContainer({ element, elementName, isImagePerson }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  function showDetails(
    id,
    name,
    title,
    poster_path,
    profile_path,
    media_type,
    overview,
    vote_average,
    popularity

  ) {
    navigate(`/details/${id}`, {
      state: {
        name,
        title,
        poster_path,
        profile_path,
        media_type,
        overview,
        vote_average,
        popularity,
      },
    });
  }

  return (
    <>
      <Box className="grid-container" my={5}>
        {elementName && (
          <Typography
            variant="h4"
            sx={{ paddingTop: { xs: "0px", md: "100px", alignSelf: "start" } }}
          >
            <Divider sx={{ display: { xs: "none", md: "block" } }} />
            {t("trending")} <br />
            {elementName} <br />
            {t("watch")}
            <Divider />
          </Typography>
        )}

        {element.map((el) => (
          <Card
            key={el.id}
            sx={{ maxWidth: 345 }}
            className="card"
            onClick={() =>
              showDetails(
                el.id,
                el.name,
                el.title,
                el.poster_path,
                el.profile_path,
                el.media_type,
                el.overview,
                el.vote_average,
                el.popularity
              )
            }
          >
            <CardMedia
              component="img"
              sx={{ minHeight: "82%" }}
              image={
                isImagePerson
                  ? el.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                    : personImage
                  : el.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${el.poster_path}`
                  : movieImage
              }
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle1" component="div">
                {el.title || el.name ? el.title || el.name : t("unknown")}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}
