"use client";

import { Box, Grid, Stack, Typography } from "@mui/material";
import decor from "@/public/decor-3.svg";
import image from "@/public/icon.svg";
import Image from "next/image";

export default function Cards(): JSX.Element {
  return (
    <Grid
      container
      maxWidth={1440}
      spacing={{ xs: 12, lg: 2 }}
      justifyContent="center"
    >
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "-4em",
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          {/* <Box position="relative" width={0} height={0}>
          <Image
            width={229}
            src={decor}
            alt="Circle decor"
            style={{ marginBottom: "8em" }}
            // style={{ position: "absolute", top: "-3em", left: "7.5em" }}
          />
        </Box> */}
          <Stack alignItems="center">
            <Image width={48} src={image} alt="Cocktail icon" />
          </Stack>
          <Stack alignItems="center" paddingTop={2}>
            <Typography variant="h5">Авторски коктейли</Typography>
          </Stack>
          <Stack alignItems="center" paddingTop={5}>
            <Typography
              width={340}
              variant="h6"
              lineHeight={1}
              textAlign="center"
            >
              Отдайте се на нашите експертно изработени коктейли, всеки един
              шедьовър на вкусове и представяне
            </Typography>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack alignItems="center">
          <Image width={48} src={image} alt="Cocktail icon" />
        </Stack>
        <Stack alignItems="center" paddingTop={2}>
          <Typography variant="h5">Гост бармани</Typography>
        </Stack>
        <Stack alignItems="center" paddingTop={5}>
          <Typography
            width={340}
            variant="h6"
            lineHeight={1}
            textAlign="center"
          >
            Насладете се на нови преживявания и вкусове в компанията на редовно
            гостуващите ни гост бармани
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: "-4em",
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <Stack alignItems="center">
            <Image width={48} src={image} alt="Cocktail icon" />
          </Stack>
          <Stack alignItems="center" paddingTop={2}>
            <Typography variant="h5">Изпълнения на живо</Typography>
          </Stack>
          <Stack alignItems="center" paddingTop={5}>
            <Typography
              width={340}
              variant="h6"
              lineHeight={1}
              textAlign="center"
            >
              Забавлявайте се със завладяващи изпълнения на живо и танцувайте до
              зори
            </Typography>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}
