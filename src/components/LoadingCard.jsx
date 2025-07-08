import { Box, Card, CardMedia, CardContent, Skeleton, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LoadingCard({ elementName }) {
  const { t } = useTranslation();
  const fakeArray = new Array(11).fill(0);

  return (
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

      {fakeArray.map((_, index) => (
        <Card key={index} sx={{ maxWidth: 345 }} className="card">
          <Skeleton
            variant="rectangular"
            animation="wave"
            sx={{ width: {xs:"100vw", sm:"100%"}, height: { xs: 180, sm: 250 } }}
          />
          <CardContent>
            <Skeleton variant="text" width="80%" height={24} />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

