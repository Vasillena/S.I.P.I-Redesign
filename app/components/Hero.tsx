"use client";

import { Box, IconButton } from "@mui/material";

import Draw from "./Animations/Draw";
import Lottie from "react-lottie-player";
import button from "@/public/arrow-button.json";
import heroImg from "@/public/hero.png";

export default function Hero() {
  const handleScroll = () => {
    const element = document.getElementById("welcome");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box
        id="home"
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "100svh", sm: "100vh" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: { xs: 10, sm: 18 },
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: {
              xs: `url(${heroImg.src}) center/cover no-repeat`,
              sm: `url(${heroImg.src}) center/cover no-repeat fixed`,
            },
            zIndex: -50,
          },
        }}
      >
        <Box width="100vw">
          <Draw />
        </Box>
        <Box>
          <IconButton onClick={handleScroll}>
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
