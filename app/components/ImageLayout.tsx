import { Box } from "@mui/material";
import image1 from "@/public/1.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import decor from "@/public/decor-2.svg";
import Image from "next/image";

export default function ImageLayout(): JSX.Element {
  return (
    <Box width={492}>
      <Image
        src={decor}
        width={25}
        style={{ marginBottom: 30, marginLeft: 9 }}
        alt="Decor"
      />
      <Image
        src={image1}
        width={288}
        style={{ borderRadius: "50%", marginLeft: 160 }}
        alt="Party people"
      />
      <Image
        src={image2}
        width={232}
        style={{ borderRadius: "50%", marginTop: -40 }}
        alt="Party people"
      />
      <Image
        src={image3}
        width={120}
        style={{
          borderRadius: "50%",
          marginBottom: 30,
          marginLeft: 40,
        }}
        alt="Party people"
      />
      <Image src={decor} width={25} alt="Decor" style={{ marginBottom: 150 }} />
    </Box>
  );
}
