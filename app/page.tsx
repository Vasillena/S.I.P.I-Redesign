import Image from "next/image";

import { Box } from "@mui/material";

import styles from "./page.module.css";

import heroImg from "@/public/hero.png";
import logo3 from "@/public/logo3.svg";

import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import FixedImage from "./components/FixedImage";
import Events from "./components/Events";
import OurPlace from "./components/OurPlace";
import OnlyFans from "./components/OnlyFans";

export default async function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${logo3.src}) center/90em no-repeat fixed`,
            opacity: 0.6,
            zIndex: 50,
          },
        }}
      >
        <Image
          fill={true}
          src={heroImg}
          alt="Hero img"
          style={{
            objectFit: "cover",
            zIndex: 1,
          }}
        />
      </Box>
      <Welcome />
      <Cards />
      <FixedImage />
      <Events />
      <OurPlace />
      <OnlyFans />
    </main>
  );
}
