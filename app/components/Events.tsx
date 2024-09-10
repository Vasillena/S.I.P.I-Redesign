import { Box, Grid, Stack, Typography } from "@mui/material";

import Divider from "./Divider";
import Image from "next/image";
import Reveal from "./Animations/Reveal";
import decor1 from "@/public/decor-6.svg";
import decor2 from "@/public/decor-7.svg";
import decor3 from "@/public/decor-8.svg";
import { getI18n } from "@/locales/server";
import image1 from "@/public/event-1.webp";
import image2 from "@/public/event-2.webp";
import image3 from "@/public/event-4.webp";

export default async function Events(): Promise<JSX.Element> {
  const t = await getI18n();

  const events = [
    {
      date: "11/09 - 21:00",
      name: "NINIO",
      image: image2,
    },
    {
      date: "12/09 - 21:00",
      name: "MIKEY FLEX",
      image: image1,
    },
    {
      date: "13/09 - 21:00",
      name: "STAY TUNED",
      image: image3,
    },
  ];

  return (
    <>
      <Grid
        id="events"
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginTop={2}
      >
        <Grid
          item
          xs={11}
          lg={9}
          marginY={{ xs: 6, lg: 21 }}
          textAlign="center"
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "24px", sm: "34px" } }}
          >
            {t("events.title-1")}
          </Typography>
        </Grid>
        <Grid item xs={9} textAlign="center" marginBottom={4}>
          <Box
            paddingY={5}
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
                background: `url(${decor1.src}) center no-repeat`,
                borderRadius: "50%",
                filter: "drop-shadow(0px 2px 2px #CCCCCC)",
                zIndex: "-50",
                transform: { xs: "scale(0.8)", lg: "scale(1)" },
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "24px", sm: "34px" } }}
            >
              {t("events.title-2")}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={5} lg={4}>
          <Reveal>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "-17em",
                  left: "-6em",
                  width: "100%",
                  height: "100%",
                  background: `url(${decor2.src}) center no-repeat`,
                },
              }}
            >
              <Stack
                width={300}
                border="1px solid #CCCCCC"
                borderRadius="40px 0 40px 0"
                textAlign="center"
                paddingY={4}
                marginX="auto"
                marginBottom={4}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[0].date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[0].name}
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Image
                  width={300}
                  src={events[0].image}
                  alt="Event image"
                  style={{ borderRadius: "40px 0 40px 0" }}
                />
              </Stack>
            </Box>
          </Reveal>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Reveal>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  order: { xs: 2, lg: 1 },
                  display: "flex",
                  justifyContent: "center",
                  marginTop: { xs: 4, lg: 0 },
                }}
              >
                <Image
                  width={300}
                  src={events[1].image}
                  alt="Event image"
                  style={{ borderRadius: "40px" }}
                />
              </Box>
              <Stack
                sx={{
                  width: 300,
                  border: "1px solid #CCCCCC",
                  borderRadius: "40px",
                  textAlign: "center",
                  paddingY: 4,
                  marginX: "auto",
                  marginTop: { xs: 0, lg: 4 },
                  order: { xs: 1, lg: 2 },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[1].date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[1].name}
                </Typography>
              </Stack>
            </Box>
          </Reveal>
        </Grid>
        <Grid item xs={12} md={5} lg={4}>
          <Reveal>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "17em",
                  right: "-6em",
                  width: "100%",
                  height: "100%",
                  background: `url(${decor3.src}) center no-repeat`,
                },
              }}
            >
              <Stack
                width={300}
                border="1px solid #CCCCCC"
                borderRadius="0 40px 0 40px "
                textAlign="center"
                paddingY={4}
                marginX="auto"
                marginBottom={4}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[2].date}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "24px", sm: "34px" } }}
                >
                  {events[2].name}
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Image
                  width={300}
                  src={events[2].image}
                  alt="Event image"
                  style={{ borderRadius: "0 40px 0 40px " }}
                />
              </Stack>
            </Box>
          </Reveal>
        </Grid>
      </Grid>
      <Box
        id="our-place"
        marginTop={{ xs: 12, lg: 0 }}
        marginBottom={{ xs: 8, lg: 0 }}
      >
        <Divider styleProp={{ transform: "scaleY(-1)" }} />
      </Box>
    </>
  );
}
