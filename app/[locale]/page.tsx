import { Box } from "@mui/material";
import Cards from "../components/Cards";
import Cocktails from "../components/Cocktails";
import Events from "../components/Events";
import Final from "../components/Final";
import FixedImage from "../components/FixedImage";
import FollowPointer from "../components/FollowPointer";
import Hero from "../components/Hero";
import OnlyFans from "../components/OnlyFans";
import OurPlace from "../components/OurPlace";
import Slider from "../components/Slider";
import Welcome from "../components/Welcome";

export default async function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
      minHeight="100vh"
    >
      <Hero />
      <Welcome />
      <FollowPointer />
      <Cards />
      <FixedImage />
      <Events />
      <OurPlace />
      <OnlyFans />
      <Cocktails />
      <Final />
      <Slider />
      {/* <GoogleMaps /> */}
      <iframe
        id="contact"
        src="https://snazzymaps.com/embed/632466"
        width="100%"
        height="500px"
        style={{ border: "none" }}
      />
    </Box>
  );
}
