import { Box, Grid, Typography } from "@mui/material";

import Divider from "./Divider";
import Image from "next/image";
import ImageLayout from "./ImageLayout";
import SinglePlace from "./SinglePlace";
import decor1 from "@/public/decor-9.svg";
import decor2 from "@/public/decor-10.svg";
import decor3 from "@/public/decor-11.svg";
import decor4 from "@/public/decor-12.svg";
import { getI18n } from "@/locales/server";
import ourPlace1 from "@/public/our-place-1.webp";
import ourPlace2 from "@/public/our-place-2.webp";
import ourPlace3 from "@/public/our-place-3.webp";
import ourPlace4 from "@/public/our-place-4.webp";
import ourPlace5 from "@/public/our-place-5.webp";
import ourPlace6 from "@/public/our-place-6.webp";
import ourPlace7 from "@/public/our-place-7.webp";
import ourPlace8 from "@/public/our-place-8.webp";
import ourPlace9 from "@/public/our-place-9.webp";

export default async function OurPlace(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={12} lg={3}>
          <Image src={decor1} alt="Decor" />
        </Grid>
        <Grid item xs={10} lg={6} textAlign="center" marginBottom={5}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "24px", lg: "34px" } }}
          >
            {t("place.title-1")}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} textAlign="end">
          <Image src={decor2} alt="Decor" />
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={11} lg={6} textAlign="center">
          <Typography
            variant="body1"
            lineHeight={1}
            textAlign="center"
            sx={{ fontSize: { xs: "18px", lg: "24px" } }}
            marginTop={{ xs: 8, lg: 0 }}
          >
            {t("place.title-2")}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout
            styleProp={"scaleX(-1)"}
            image1={ourPlace1}
            image2={ourPlace2}
            image3={ourPlace3}
          />
        </Grid>
        <Grid item xs={11} lg={6} textAlign="center">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-8em",
                right: "-3em",
                width: "110%",
                height: "100%",
                background: {
                  xs: "none",
                  lg: `url(${decor3.src}) center no-repeat`,
                },
              },
            }}
          >
            <SinglePlace
              title={t("place.place-1-title")}
              description={t("place.place-1-text")}
              capacityNumber={"60"}
              capacityText={t("place.place-1-places")}
            />
          </Box>
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={11} lg={6} textAlign="center" order={{ xs: 2, lg: 1 }}>
          <SinglePlace
            title={t("place.place-2-title")}
            description={t("place.place-2-text")}
            capacityNumber={"80"}
            capacityText={t("place.place-1-places")}
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          display="flex"
          justifyContent="center"
          order={{ xs: 1, lg: 2 }}
        >
          <ImageLayout
            image1={ourPlace4}
            image2={ourPlace5}
            image3={ourPlace6}
          />
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            transform: "scaleX(-1)",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout
            styleProp={"scaleX(-1)"}
            image1={ourPlace7}
            image2={ourPlace8}
            image3={ourPlace9}
          />
        </Grid>
        <Grid item xs={11} lg={6} textAlign="center">
          <SinglePlace
            title={t("place.place-3-title")}
            description={t("place.place-3-text-temp")}
            capacityNumber={"40"}
            capacityText={t("place.place-1-places")}
          />
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box id="murch">
        <Divider />
      </Box>
    </>
  );
}
