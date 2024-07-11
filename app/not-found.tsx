import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "4vw",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: "4vw",
        }}
      >
        NOT FOUND
      </Typography>
    </Box>
  );
}
