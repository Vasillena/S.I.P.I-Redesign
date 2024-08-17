import Image, { StaticImageData } from "next/image";
import { Stack, Typography } from "@mui/material";

import Reveal from "./Reveal";

interface SingleCardProps {
  image: StaticImageData;
  title: string;
  description: string;
}

export default function SingleCard({
  image,
  title,
  description,
}: SingleCardProps): JSX.Element {
  return (
    <Reveal>
      <Stack alignItems="center">
        <Image width={48} src={image} alt="Cocktail icon" />
      </Stack>
      <Stack alignItems="center" paddingTop={2}>
        <Typography variant="h5" sx={{ fontSize: { xs: "20px", sm: "24px" } }}>
          {title}
        </Typography>
      </Stack>
      <Stack alignItems="center" paddingTop={5}>
        <Typography
          width={340}
          variant="h6"
          lineHeight={1}
          textAlign="center"
          sx={{ fontSize: { xs: "18px", sm: "20px" } }}
        >
          {description}
        </Typography>
      </Stack>
    </Reveal>
  );
}
