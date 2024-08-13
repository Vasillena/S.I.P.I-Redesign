"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";
import image1 from "@/public/1.jpg";
import image10 from "@/public/10.png";
import image11 from "@/public/11.png";
import image12 from "@/public/12.png";
import image13 from "@/public/13.png";
import image14 from "@/public/14.png";
import image2 from "@/public/2.jpg";
import image3 from "@/public/3.jpg";
import image4 from "@/public/4.jpg";
import image5 from "@/public/5.jpg";
import image6 from "@/public/6.jpg";
import image7 from "@/public/7.jpg";
import image8 from "@/public/8.png";
import image9 from "@/public/9.png";
import { useBreakpoints } from "../utils/useBreakpoints";

const slides = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
  { image: image7 },
  { image: image8 },
  { image: image9 },
  { image: image10 },
  { image: image11 },
  { image: image12 },
  { image: image13 },
  { image: image14 },
];

export default function Slider(): JSX.Element {
  // Duplicate the slides array to ensure seamless looping
  const duplicatedSlides = [...slides, ...slides];
  const { mobile } = useBreakpoints();

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
        py: 2,
        width: "100%",
        top: "-150px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          "&:before": {
            content: '""',
            position: "absolute",
            left: "-10px",
            top: 0,
            width: "25%",
            height: "100%",
            background: `linear-gradient(to right, #f0f0f0, transparent)`,
            filter: "blur(3px)",
          },
          "&:after": {
            content: '""',
            position: "absolute",
            right: "-10px",
            top: 0,
            width: "25%",
            height: "100%",
            background: `linear-gradient(to left, #f0f0f0, transparent)`,
            filter: "blur(3px)",
          },
        }}
      />

      <Ticker duration={100}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Image
                src={slide.image}
                alt="Party"
                width={250}
                height={250}
                style={{ borderRadius: "40px" }}
              />
            </Box>
          </Box>
        ))}
      </Ticker>

      {/* <motion.div
        style={{ display: "flex" }}
        animate={{
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: mobile ? 10 : 30,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              flexShrink: 0,
              width: "280px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                // borderRadius: "40",
              }}
            >
              <Image
                src={slide.image}
                alt="Party"
                width={250}
                height={250}
                style={{ borderRadius: "40px" }}
              />
            </Box>
          </Box>
        ))}
      </motion.div> */}
    </Box>
  );
}
