"use client";

import { Box, Grid } from "@mui/material";

import SingleCard from "./SingleCard";
import decor from "@/public/decor-3.svg";
import image1 from "@/public/icon-1.svg";
import image2 from "@/public/icon-2.svg";
import image3 from "@/public/icon-3.svg";

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
            height: "188px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: { xs: "-3em", md: "-3em", lg: "-3em", xl: "-3em" },
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <SingleCard
            image={image1}
            title={"Авторски коктейли"}
            description={
              "Отдайте се на нашите експертно изработени коктейли, всеки един шедьовър на вкусове и представяне"
            }
          />
        </Box>
      </Grid>
      <Grid item xs={12} lg={4}>
        <SingleCard
          image={image2}
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
            height: "188px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: { xs: "-3.5em", md: "-3em", lg: "-3em", xl: "-3em" },
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <SingleCard
            image={image3}
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
