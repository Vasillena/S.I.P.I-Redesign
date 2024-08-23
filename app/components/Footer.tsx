import { Box, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import decor from "@/public/decor-18.svg";
import { getI18n } from "@/locales/server";
import icon1 from "@/public/icon-4.svg";
import icon2 from "@/public/icon-5.svg";
import logo from "@/public/logo-2.svg";

export default async function Footer(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <Box
      width="100%"
      height={{ xs: "400px", lg: "556px" }}
      bgcolor="#2E2E2E"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="white"
    >
      <Box
        sx={{
          position: "relative",
          width: "700px",
          height: "400px",
          "&::before": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: `url(${logo.src}) center no-repeat`,
            opacity: 0.1,
            transform: { xs: "scale(0.5)", lg: "scale(1)" },
          },
        }}
      >
        <Box marginTop={{ xs: "12em", lg: "18em" }}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontSize: { xs: "18px", lg: "24px" } }}
          >
            {t("footer.text-1")}
          </Typography>
          <Link
            href="tel:+359885673337"
            rel="nofollow noopener"
            aria-label="Phone"
          >
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ fontSize: { xs: "18px", lg: "24px" } }}
            >
              0885 67 33 37
            </Typography>
          </Link>

          <Typography
            variant="body1"
            textAlign="center"
            sx={{ fontSize: { xs: "18px", lg: "24px" } }}
          >
            {t("footer.text-2")}
          </Typography>
        </Box>
      </Box>
      <Image src={decor} alt="Decor" />
      <Box display="flex" justifyContent="center" alignItems="center">
        <Link href="https://www.facebook.com/sipi.kapana/">
          <Image src={icon1} alt="Facebook Icon" />
        </Link>
        <Link href="https://www.instagram.com/sipi.kapana/?hl=bg">
          <Image src={icon2} alt="Instagram Icon" />
        </Link>
      </Box>
      <Box marginBottom={4}>
        <Typography
          variant="h3"
          textAlign="center"
          px={1}
          sx={{ fontSize: { xs: "16px", lg: "20px" } }}
        >
          {t("footer.text-3")}
          <Link href="https://github.com/Vasillena" target="_blank">
            <Typography
              display="inline"
              variant="h3"
              sx={{
                fontSize: { xs: "16px", lg: "20px" },
                "&:hover": {
                  color: "#CCCCCC",
                },
              }}
            >
              {" "}
              VY
            </Typography>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
