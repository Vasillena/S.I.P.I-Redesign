"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import Ticker from "framer-motion-ticker";
import image1 from "@/public/1.webp";
import image10 from "@/public/10.webp";
import image11 from "@/public/11.webp";
import image12 from "@/public/12.webp";
import image13 from "@/public/13.webp";
import image14 from "@/public/14.webp";
import image2 from "@/public/2.webp";
import image3 from "@/public/3.webp";
import image4 from "@/public/4.webp";
import image5 from "@/public/5.webp";
import image6 from "@/public/6.webp";
import image7 from "@/public/7.webp";
import image8 from "@/public/8.webp";
import image9 from "@/public/9.webp";

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
    </Box>
  );
}
