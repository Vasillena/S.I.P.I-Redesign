"use client";

import { Box, Grid } from "@mui/material";

import SingleCard from "./SingleCard";
import decor from "@/public/decor-3.svg";
import image from "@/public/icon.svg";

export default function Cards(): JSX.Element {
  return (
    <Grid
      container
      maxWidth={1440}
      spacing={{ xs: 20, lg: 2 }}
      justifyContent="center"
      marginTop={{ xs: 1, lg: 0 }}
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
          <SingleCard
            image={image}
            title={"Авторски коктейли"}
            description={
              "Отдайте се на нашите експертно изработени коктейли, всеки един шедьовър на вкусове и представяне"
            }
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <SingleCard
          image={image}
          title={"Гост бармани"}
          description={
            "Насладете се на нови преживявания и вкусове в компанията на редовно гостуващите ни гост бармани"
          }
        />
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
          <SingleCard
            image={image}
            title={"Изпълнения на живо"}
            description={
              "Забавлявайте се със завладяващи изпълнения на живо и танцувайте до зори"
            }
          />
        </Box>
      </Grid>
    </Grid>
  );
}
