import { Box, Grid, Typography } from "@mui/material";

import Divider from "./Divider";
import ImageLayout from "./ImageLayout";
import decor from "@/public/decor-1.svg";
import { getI18n } from "@/locales/server";
import image1 from "@/public/welcome-1.png";
import image2 from "@/public/welcome-2.png";
import image3 from "@/public/welcome-3.png";

export default async function Welcome(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <Box id="welcome" />
      <Grid container maxWidth={1440} justifyContent="center" marginTop={20}>
        <Grid item xs={11} lg={5}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-7.5em",
                left: { md: "-2em", lg: "-2em" },
                width: "100%",
                height: "100%",
                background: `url(${decor.src}) center no-repeat`,
                display: { xs: "none", md: "block" },
              },
            }}
          >
            <Typography
              width={432}
              variant="h1"
              marginBottom={8}
              sx={{ fontSize: { xs: "40px", sm: "60px" } }}
              textAlign={{ xs: "center", md: "left" }}
            >
              {t("hero.title")} <br /> {t("hero.title-2")}
            </Typography>
            <Typography
              width={{ xs: 300, sm: 472 }}
              variant="h5"
              lineHeight={1}
              paddingLeft={{ xs: 0, md: 5 }}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ fontSize: { xs: "18px", sm: "24px" } }}
            >
              {t("hero.text")}
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
          <ImageLayout image1={image1} image2={image2} image3={image3} />
        </Grid>
      </Grid>

      <Divider />
    </>
  );
}
