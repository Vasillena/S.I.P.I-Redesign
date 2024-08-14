import Image from "next/image";
import loading from "@/public/loading.gif";
import { Box } from "@mui/material";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 69px)",
        width: "100vw",
        marginTop: "50vh",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Image src={loading} alt="Loading" />
    </Box>
  );
}
