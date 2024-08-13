import { Box, Grid, Stack, Typography } from "@mui/material";

import Divider from "./Divider";
import ImageLayout from "./ImageLayout";
import decor from "@/public/decor-1.svg";
import image1 from "@/public/welcome-1.png";
import image2 from "@/public/welcome-2.png";
import image3 from "@/public/welcome-3.png";

export default function Welcome(): JSX.Element {
  return (
    <>
      {/* <Box
        maxWidth={1440}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop={18}
        marginX={{ xs: "auto", lg: 0 }}
        gap={5}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-7.5em",
              left: "-1.5em",
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <Typography
            width={432}
            variant="h2"
            marginBottom={8}
            sx={{ fontSize: { xs: "40px", lg: "60px" } }}
          >
            Добре дошли <br />в Бар С.И.П.И.
          </Typography>
          <Typography
            width={{ xs: 260, lg: 472 }}
            variant="h5"
            lineHeight={1}
            paddingLeft={5}
            sx={{ fontSize: { xs: "16px", lg: "24px" } }}
          >
            Oазисът на Hip Hop музиката в сърцето на Капана. Ние сме вдъхновени
            от енергията и неповторимия стил на Hip Hop сцената. При нас ще се
            наслаждавате на авторски коктейли, парти обстановка и музикални
            изживявания. Бар С.И.П.И. е повече от място за напитки; това е
            преживяване, където парти хората се събират всеки уикенд, за да
            споделят обичта си към музиката.
          </Typography>
        </Box>
        <Box>
          <ImageLayout image1={image1} image2={image2} image3={image3} />
        </Box>
      </Box> */}
      <Grid
        container
        maxWidth={1440}
        // spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginTop={18}
      >
        <Grid item xs={11} lg={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-7.5em",
                left: "-1.5em",
                width: "100%",
                height: "100%",
                background: `url(${decor.src}) center no-repeat`,
              },
            }}
          >
            <Typography
              width={432}
              variant="h2"
              marginBottom={8}
              sx={{ fontSize: { xs: "40px", lg: "60px" } }}
            >
              Добре дошли <br />в Бар С.И.П.И.
            </Typography>
            <Typography
              width={{ xs: 260, lg: 472 }}
              variant="h5"
              lineHeight={1}
              paddingLeft={5}
              sx={{ fontSize: { xs: "16px", lg: "24px" } }}
            >
              Oазисът на Hip Hop музиката в сърцето на Капана. Ние сме
              вдъхновени от енергията и неповторимия стил на Hip Hop сцената.
              При нас ще се наслаждавате на авторски коктейли, парти обстановка
              и музикални изживявания. Бар С.И.П.И. е повече от място за
              напитки; това е преживяване, където парти хората се събират всеки
              уикенд, за да споделят обичта си към музиката.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
          <ImageLayout image1={image1} image2={image2} image3={image3} />
        </Grid>
      </Grid>

      <Divider />
    </>
  );
}
