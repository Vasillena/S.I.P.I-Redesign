import { Box, Grid, Stack, Typography } from "@mui/material";

import Divider from "./Divider";
import Image from "next/image";
import decor1 from "@/public/decor-6.svg";
import decor2 from "@/public/decor-7.svg";
import decor3 from "@/public/decor-8.svg";
import image1 from "@/public/event-1.jpg";

export default function Events(): JSX.Element {
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
      >
        <Grid
          item
          xs={11}
          lg={9}
          marginY={{ xs: 6, lg: 21 }}
          textAlign="center"
        >
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "20px", md: "34px" } }}
          >
            Всяка седмица се наслаждаваме на гостувания от известни диджеи от
            Hip Hop сцената на България, както и на тематични партита, които
            трансформират клуба в сцена с разнообразни концепции.
          </Typography>
        </Grid>
        <Grid item xs={9} textAlign="center" marginBottom={4}>
          <Box
            paddingY={5}
            // marginBottom={4}
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
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontSize: { xs: "24px", lg: "34px" } }}
            >
              UPCOMING EVENTS
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} lg={4}>
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
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                31/05
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                Lil Patriarch
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Image
                width={300}
                src={image1}
                alt="Event image"
                style={{ borderRadius: "40px 0 40px 0" }}
              />
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
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
                src={image1}
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
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                31/05
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                Lil Patriarch
              </Typography>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4}>
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
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                31/05
              </Typography>
              <Typography
                variant="h4"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                Lil Patriarch
              </Typography>
            </Stack>
            <Stack alignItems="center">
              <Image
                width={300}
                src={image1}
                alt="Event image"
                style={{ borderRadius: "0 40px 0 40px " }}
              />
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Divider styleProp={{ transform: "scaleY(-1)" }} />
    </>
  );
}
