"use client";

import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";
import image1 from "@/public/murch-1.jpg";
import image2 from "@/public/murch-2.jpg";
import image3 from "@/public/murch-3.jpg";
import { useBreakpoints } from "../utils/useBreakpoints";

const images = [
  { src: image1, alt: "T-shirt" },
  { src: image2, alt: "T-shirt" },
  { src: image3, alt: "T-shirt" },
];

export default function ImageChange() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { mobile } = useBreakpoints();

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box
      width={{ xs: "90%", lg: 528 }}
      height={{ xs: "auto", lg: 680 }}
      bgcolor="white"
      sx={{ opacity: "0.8" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="40px 0 40px 0"
      marginX={{ xs: "auto", lg: 0 }}
      marginBottom={{ xs: 12, lg: 0 }}
      zIndex={100}
    >
      <IconButton onClick={handlePrevClick}>
        <ArrowBackIosNewIcon sx={{ color: mobile ? "white" : "inherit" }} />
      </IconButton>
      <Image
        width={452}
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        style={{
          width: mobile ? "100%" : 452,
          height: "auto",
          borderRadius: mobile ? "40px 0 40px 0" : "0",
        }}
      />
      <IconButton onClick={handleNextClick}>
        <ArrowForwardIosIcon sx={{ color: mobile ? "white" : "inherit" }} />
      </IconButton>
    </Box>
  );
}
