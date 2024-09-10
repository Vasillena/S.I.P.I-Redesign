"use client";

import { Box } from "@mui/material";
import Image from "next/image";
import divider from "@/public/divider.svg";
import { useBreakpoints } from "../utils/useBreakpoints";

interface DividerProps {
  styleProp?: React.CSSProperties;
}

export default function Divider({ styleProp }: DividerProps): JSX.Element {
  const { mobile } = useBreakpoints();

  return (
    <Box
      marginY={{ xs: 12, lg: 21 }}
      sx={{ scale: mobile ? "0.8" : "1" }}
      style={styleProp}
    >
      <Image width={400} src={divider} alt="Divider" />
    </Box>
  );
}
