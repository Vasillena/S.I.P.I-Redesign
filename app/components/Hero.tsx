"use client";

import { Box, IconButton } from "@mui/material";

import Draw from "../components/Draw";
import Lottie from "react-lottie-player";
import button from "@/public/arrow-button.json";
import heroImg from "@/public/hero.png";

export default function Hero() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // gap: 30,
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${heroImg.src}) center/cover no-repeat fixed`,
            // background: {
            //   xs: `url(${logo3.src}) center/17em no-repeat fixed`,
            //   md: `url(${logo3.src}) center/60em no-repeat fixed`,
            //   lg: `url(${logo3.src}) center/90em no-repeat fixed`,
            // },
            // opacity: 0.6,
            // zIndex: 50,
            zIndex: -50,
          },
        }}
      >
        <Box width="100vw" justifySelf="center" alignSelf="center">
          <Draw />
        </Box>

        {/* <Image
            fill={true}
            src={heroImg}
            alt="Hero img"
            style={{
              objectFit: "cover",
              zIndex: 1,
            }}
          /> */}
        <Box>
          <IconButton>
            <Lottie
              animationData={button}
              play
              loop
              style={{ width: "90px", height: "auto" }}
            />
          </IconButton>
        </Box>
      </Box>
    </>
  );
}
