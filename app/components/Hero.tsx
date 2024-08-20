"use client";

import { Box, IconButton } from "@mui/material";

import Draw from "./Animations/Draw";
import Lottie from "react-lottie-player";
import button from "@/public/arrow-button.json";
import heroImg from "@/public/hero.png";
import { useBreakpoints } from "../utils/useBreakpoints";

export default function Hero() {
  const { mobile } = useBreakpoints();
  // const handleScroll = () => {
  //   const element = document.getElementById("welcome");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  const handleScroll = () => {
    const element = document.getElementById("welcome");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setTimeout(() => {
        window.scrollBy({
          top: mobile ? -20 : 260,
          behavior: "smooth",
        });
      }, 400);
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
          gap: { xs: 3, sm: 18 },
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
        <Box
          width="100vw"
          // justifySelf="center" alignSelf="center"
        >
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
