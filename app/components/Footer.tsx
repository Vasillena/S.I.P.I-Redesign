import { Box, Typography } from "@mui/material";

import Image from "next/image";
import Link from "next/link";
import decor from "@/public/decor-18.svg";
import icon1 from "@/public/icon-4.svg";
import icon2 from "@/public/icon-5.svg";
import logo from "@/public/logo3.svg";

export default function Footer(): JSX.Element {
  return (
    <Box
      width="100%"
      height="556px"
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
            // backgroundSize: "200px",
            // zIndex: "-50",
            // display: { xs: "none", sm: "none", md: "block", lg: "block" },
          },
        }}
      >
        <Box marginTop="18em">
          <Typography variant="h5" textAlign="center">
            Капана / Братя Пулиеви 1
          </Typography>
          <Typography variant="h5" textAlign="center">
            0885 67 33 37
          </Typography>
          <Typography variant="h5" textAlign="center">
            Вторник - Неделя: 18:00 - 03:00ч
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
      <Box>
        <Typography variant="h6">
          Copyright © 2024 С.И.П.И. Всички права запазени | Създадено от
          <Link href="https://github.com/Vasillena" target="_blank">
            {" "}
            VY
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
