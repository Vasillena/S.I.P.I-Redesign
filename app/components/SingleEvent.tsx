import Image, { StaticImageData } from "next/image";
import { Stack, Typography } from "@mui/material";

interface SingleEventProps {
  image: StaticImageData;
  performer: string;
  date: string;
}

export default function SingleEvent({
  image,
  performer,
  date,
}: SingleEventProps): JSX.Element {
  return (
    <>
      <Stack
        width={300}
        border="1px solid #CCCCCC"
        borderRadius="40px 0 40px 0"
        textAlign="center"
        paddingY={4}
        marginX="auto"
        marginBottom={4}
      >
        <Typography variant="h4" sx={{ fontSize: { xs: "24px", lg: "34px" } }}>
          {date}
        </Typography>
        <Typography variant="h4" sx={{ fontSize: { xs: "24px", lg: "34px" } }}>
          {performer}
        </Typography>
      </Stack>
      <Stack alignItems="center">
        <Image
          width={300}
          src={image}
          alt="Event image"
          style={{ borderRadius: "40px 0 40px 0" }}
        />
      </Stack>
    </>
  );
}
