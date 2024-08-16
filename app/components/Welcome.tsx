import { Box, Grid, Stack, Typography } from "@mui/material";

import Bounce from "./Bounce";
import Divider from "./Divider";
import ImageLayout from "./ImageLayout";
import Reveal from "./Reveal";
import decor from "@/public/decor-1.svg";
import image1 from "@/public/welcome-1.png";
import image2 from "@/public/welcome-2.png";
import image3 from "@/public/welcome-3.png";

export default function Welcome(): JSX.Element {
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        // spacing={{ xs: 4, lg: 2 }}
        justifyContent="center"
        marginTop={18}
      >
        <Grid item xs={11} lg={5}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={{ xs: "center" }}
            alignItems={{ xs: "center", lg: "flex-start" }}
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-7.5em",
                left: { md: "-2em", lg: "-5.5em" },
                width: "100%",
                height: "100%",
                background: `url(${decor.src}) center no-repeat`,
                display: { xs: "none", md: "block" },
              },
            }}
          >
            <Typography
              width={432}
              variant="h2"
              marginBottom={8}
              sx={{ fontSize: { xs: "40px", sm: "60px" } }}
              textAlign={{ xs: "center", md: "left" }}
            >
              Добре дошли <br />в Бар С.И.П.И.
            </Typography>
            <Typography
              width={{ xs: 300, sm: 472 }}
              variant="h5"
              lineHeight={1}
              paddingLeft={{ xs: 0, md: 5 }}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ fontSize: { xs: "16px", sm: "24px" } }}
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
        <Grid
          item
          xs={11}
          lg={5}
          display="flex"
          justifyContent={{ xs: "center" }}
          marginTop={{ xs: 8, lg: 0 }}
        >
          {/* <Box display="flex" justifyContent="center"> */}
          <ImageLayout image1={image1} image2={image2} image3={image3} />
          {/* </Box> */}
        </Grid>
      </Grid>

      <Divider />
    </>
  );
}
