"use client";

import Image, { StaticImageData } from "next/image";

import Bounce from "./Animations/Bounce";
import { Box } from "@mui/material";
import Reveal from "./Animations/Reveal";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import decor from "@/public/decor-2.svg";
import { useBreakpoints } from "../utils/useBreakpoints";

// import image1 from "@/public/1.png";
// import image2 from "@/public/2.png";
// import image3 from "@/public/3.png";

interface ImageLayoutProps {
  styleProp?: string;
  image1: StaticImport;
  image2: StaticImport;
  image3: StaticImport;
}

export default function ImageLayout({
  styleProp,
  image1,
  image2,
  image3,
}: ImageLayoutProps): JSX.Element {
  const { mobile } = useBreakpoints();

  return (
    <Box
      width={492}
      sx={{ scale: mobile ? "0.7" : "1", transform: `${styleProp}` }}
    >
      <Bounce>
        <Image
          src={decor}
          width={25}
          style={{ marginBottom: 30, marginLeft: 9 }}
          alt="Decor"
        />
      </Bounce>
      <Bounce>
        <Image
          src={image1}
          width={288}
          style={{
            borderRadius: "50%",
            marginLeft: 160,
            transform: `${styleProp}`,
          }}
          alt="Party people"
        />
      </Bounce>
      <Bounce>
        <Image
          src={image2}
          width={232}
          style={{
            borderRadius: "50%",
            marginTop: -40,
            transform: `${styleProp}`,
          }}
          alt="Party people"
        />
      </Bounce>
      <Bounce>
        <Image
          src={image3}
          width={120}
          style={{
            borderRadius: "50%",
            marginBottom: 30,
            marginLeft: 40,
            transform: `${styleProp}`,
          }}
          alt="Party people"
        />
      </Bounce>

      <Bounce>
        <Image
          src={decor}
          width={25}
          alt="Decor"
          style={{ marginBottom: 150 }}
        />
      </Bounce>
    </Box>
  );
}
