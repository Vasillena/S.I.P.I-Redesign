import { Box, Grid, Typography } from "@mui/material";

import Divider from "./Divider";
import Image from "next/image";
import ImageChange from "./ImageChange";
import Reveal from "./Animations/Reveal";
import decor1 from "@/public/decor-13.svg";
import decor2 from "@/public/decor-6.svg";
import decor3 from "@/public/decor-14.svg";
import { getI18n } from "@/locales/server";

export default async function OnlyFans(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <Box position="relative" marginRight="auto" width={0} height={0}>
        <Image
          width={229}
          src={decor1}
          alt="Logo decor"
          style={{ position: "absolute", top: 340, left: 0 }}
        />
      </Box>
      <Grid container maxWidth={1440}>
        <Grid
          item
          xs={11}
          lg={6}
          mx="auto"
          paddingY={5}
          textAlign="center"
          marginBottom={-4}
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "-0.5em",
              left: 0,
              width: "100%",
              height: "110%",
              background: `url(${decor2.src}) center no-repeat`,
              borderRadius: "50%",
              filter: "drop-shadow(0px 2px 2px #2E2E2E)",
              transform: { xs: "scale(0.8)", lg: "scale(1)" },
            },
          }}
        >
          <Reveal>
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "24px", sm: "34px" } }}
              position="relative"
              zIndex={100}
            >
              {t("fans.title")}
            </Typography>
          </Reveal>
        </Grid>
        <Grid item xs={11} lg={6} />
      </Grid>

      <Box
        width="100vw"
        height={{ xs: "auto", lg: 496 }}
        bgcolor="#2E2E2E"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          container
          maxWidth={1440}
          spacing={{ xs: 12, lg: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={11} lg={6}>
            <Typography
              variant="body1"
              lineHeight={1}
              maxWidth={{ xs: 520, lg: 400 }}
              textAlign="center"
              color="white"
              marginX="auto"
              marginTop={{ xs: 12, lg: 0 }}
              sx={{ fontSize: { xs: "18px", sm: "24px" } }}
            >
              {t("fans.text")}
            </Typography>
          </Grid>
          <Grid item xs={11} lg={6}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-3.5em",
                  left: "-9.5em",
                  width: "100%",
                  height: "100%",
                  background: `url(${decor3.src}) center no-repeat`,
                  display: { xs: "none", sm: "none", md: "none", lg: "block" },
                },
              }}
            >
              <ImageChange />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box marginTop={{ xs: 8, lg: 10 }} marginBottom={{ xs: 4, lg: 0 }}>
        <Divider styleProp={{ transform: "scaleY(-1)" }} />
      </Box>
    </>
  );
}
