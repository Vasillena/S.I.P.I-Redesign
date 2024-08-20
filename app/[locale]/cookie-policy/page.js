import { Box } from "@mui/material";
import CookiePolicy from "../../components/CookiePolicy";

export const metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy",
};

export default function CookiePolicyPage() {
  return (
    <Box maxWidth={1440} mx="auto" minHeight="100vh" marginY={10}>
      <CookiePolicy />
    </Box>
  );
}
