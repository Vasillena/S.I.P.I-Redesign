"use client";

import { Poiret_One } from "next/font/google";
import { createTheme } from "@mui/material";

const poiretOneFont = Poiret_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export const theme = createTheme({
  typography: {
    fontFamily: [
      poiretOneFont.style.fontFamily,
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
