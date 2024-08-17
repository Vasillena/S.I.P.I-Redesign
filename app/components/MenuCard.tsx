import { Box, Button, Typography } from "@mui/material";

interface MenuCardProps {
  text1: string;
  text2?: string;
  onClick: () => void;
}

export default function MenuCard({ text1, text2, onClick }: MenuCardProps) {
  return (
    <Button
      disableRipple
      onClick={onClick}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Box
        sx={{
          minWidth: 120,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          aspectRatio: "1/1",
          borderRadius: "50%",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(91, 73, 102, 0.5)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          //   padding: "24px",
        }}
      >
        <Typography variant="h6" color="black">
          {text1}{" "}
        </Typography>
        {text2 && (
          <Typography variant="h6" color="black">
            {text2}
          </Typography>
        )}
      </Box>
    </Button>
  );
}
