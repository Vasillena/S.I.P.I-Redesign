import { Box } from "@mui/material";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import decor from "@/public/decor-2.svg";
import Image from "next/image";

export default function ImageLayout2(): JSX.Element {
  return (
    <Box width={492} textAlign="center">
      <Image
        src={image1}
        width={288}
        style={{ borderRadius: "50%", marginLeft: -50 }}
        alt="Party people"
      />
      <Image
        src={decor}
        width={25}
        style={{ marginBottom: 30, marginLeft: 170 }}
        alt="Decor"
      />
      <br />
      <Image
        src={decor}
        width={25}
        alt="Decor"
        style={{ marginBottom: 150, marginLeft: 10 }}
      />
      <Image
        src={image3}
        width={120}
        style={{
          borderRadius: "50%",
          marginBottom: 30,
        }}
        alt="Party people"
      />
      <Image
        src={image2}
        width={232}
        style={{ borderRadius: "50%", marginTop: -40, marginLeft: 50 }}
        alt="Party people"
      />
    </Box>
  );
}
