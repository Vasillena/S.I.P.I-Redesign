import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import decor1 from "@/public/decor-9.svg";
import decor2 from "@/public/decor-10.svg";
import logo from "@/public/logo-2.svg";

export default function Final(): JSX.Element {
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
            variant="h4"
            sx={{ fontSize: { xs: "20px", lg: "34px" } }}
          >
            Ние вярваме, че музиката е езикът, който ни обединява, и затова не
            просто сме създали място за срещи и напитки - създали сме истински
            оазис, където хората се събират, за да изразят себе си.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} textAlign="end">
          <Image src={decor2} alt="Decor" />
        </Grid>
        <Box
          sx={{
            position: "relative",
            width: "300px",
            height: "300px",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "0",
              left: "0",
              width: "110%",
              height: "100%",
              background: `url(${logo.src}) center no-repeat`,
              // backgroundSize: "200px",
              zIndex: "-50",
              // display: { xs: "none", sm: "none", md: "block", lg: "block" },
              animation: "rotate 10s linear infinite", // Adding the animation here
            },
            "@keyframes rotate": {
              "0%": {
                transform: "rotate(0deg)",
              },
              "50%": {
                transform: "rotate(180deg)",
              },
              "100%": {
                transform: "rotate(360deg)",
              },
            },
          }}
        >
          <Typography
            variant="h4"
            position="relative"
            top="3.8em"
            textAlign="center"
            left="0.5em"
          >
            ЕЛА НА ПАРТИ
          </Typography>
          {/* <Typography
            variant="h5"
            position="relative"
            top="6.2em"
            textAlign="center"
            // left="-3.9em"
          >
            Стани част от нашата история! Очакваме те в Капана!
          </Typography> */}
        </Box>
      </Grid>
    </>
  );
}
