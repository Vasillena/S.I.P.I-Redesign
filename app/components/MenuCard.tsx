"use cient";

import { Box, Button, Divider, Typography } from "@mui/material";

import { useBreakpoints } from "../utils/useBreakpoints";
import { useCurrentLocale } from "@/locales/client";

interface MenuCardProps {
  text1: string;
  text2?: string | null;
  text3?: string;
  onClick: () => void;
  active?: boolean;
}

export default function MenuCard({
  text1,
  text2,
  text3,
  onClick,
  active,
}: MenuCardProps) {
  const locale = useCurrentLocale();
  const { desktop } = useBreakpoints();
  return (
    <>
      <Button
        disableRipple
        onClick={onClick}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingX: { xs: "0", md: "8px" },
          paddingY: { xs: "0", md: "6px" },
          backgroundColor: "#f0f0f0",
          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "80vw", md: 140 },
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            aspectRatio: { md: "1/1" },
            borderRadius: { md: "50%" },
            backdropFilter: "blur(10px)",
            backgroundColor: active
              ? "rgba(91, 73, 102, 0.7)"
              : "rgba(91, 73, 102, 0.5)",
            boxShadow: { xs: "none", md: "0 4px 15px rgba(0, 0, 0, 0.3)" },
            paddingY: { xs: 1, md: 0 },
          }}
        >
          <Typography variant="h6" color="black">
            {text1}
          </Typography>
          {text2 && (
            <Typography variant="h6" color="black">
              {text2}
            </Typography>
          )}
          {text3 && (
            <Typography variant="h6" color="black">
              {desktop ? "" : "\u00A0"}
              {text3}
            </Typography>
          )}
        </Box>
      </Button>
      <Divider />
    </>
  );
}
