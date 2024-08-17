"use client";

import { Box } from "@mui/material";
import Lottie from "react-lottie-player";
import loading from "@/public/loading.json";

export default function Loading() {
  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Lottie
        animationData={loading}
        play
        loop
        style={{ width: "400px", height: "auto" }}
      />
    </Box>
  );
}
