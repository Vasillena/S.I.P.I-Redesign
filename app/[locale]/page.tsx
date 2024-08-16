import { Box } from "@mui/material";
import Cards from "../components/Cards";
import Draw from "../components/Draw";
import Events from "../components/Events";
import Final from "../components/Final";
import FixedImage from "../components/FixedImage";
import FollowPointer from "../components/FollowPointer";
import Footer from "../components/Footer";
// import GoogleMaps from "../components/Map";
import Image from "next/image";
import Menu from "../components/Menu";
import OnlyFans from "../components/OnlyFans";
import OurPlace from "../components/OurPlace";
import Slider from "../components/Slider";
import TransitionProvider from "../components/StartingAnimation";
import Welcome from "../components/Welcome";
import heroImg from "@/public/hero.png";
import logo3 from "@/public/logo-2.svg";

export default async function Home() {
  return (
    // <TransitionProvider>
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${heroImg.src}) center/cover no-repeat fixed`,
            // background: {
            //   xs: `url(${logo3.src}) center/17em no-repeat fixed`,
            //   md: `url(${logo3.src}) center/60em no-repeat fixed`,
            //   lg: `url(${logo3.src}) center/90em no-repeat fixed`,
            // },
            // opacity: 0.6,
            // zIndex: 50,
            zIndex: -50,
          },
        }}
      >
        <Draw />
        {/* <Image
            fill={true}
            src={heroImg}
            alt="Hero img"
            style={{
              objectFit: "cover",
              zIndex: 1,
            }}
          /> */}
      </Box>

      <Welcome />
      <FollowPointer />
      <Cards />
      <FixedImage />
      <Events />
      <OurPlace />
      <OnlyFans />
      <Menu />
      <Final />
      <Slider />
      {/* <GoogleMaps /> */}
      <iframe
        src="https://snazzymaps.com/embed/632466"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      />
    </Box>
    // {/* </TransitionProvider> */}
  );
}
