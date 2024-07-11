"use client";

import { Box, Typography } from "@mui/material";

export default function Error() {
  return (
    <Box
      style={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography variant="h1">
        Нещо се обърка! Моля, опитайте отново по-късно!
      </Typography>
    </Box>
  );
}
