import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import image from "@/public/murch-1.png";
import decor1 from "@/public/decor-13.svg";
import decor2 from "@/public/decor-6.svg";

export default function OnlyFans(): JSX.Element {
  return (
    <>
      <Box position="relative" marginRight="auto" width={0} height={0}>
        <Image
          width={229}
          src={decor1}
          alt="Logo decor"
          style={{ position: "absolute", top: 340, left: 0 }}
        />
      </Box>
      <Box
        paddingY={5}
        textAlign="center"
        marginBottom={-4}
        marginLeft={{ xs: 0, lg: -88 }}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${decor2.src}) center no-repeat`,
            borderRadius: "50%",
            filter: "drop-shadow(0px 2px 2px #CCCCCC)",
            zIndex: "-1",
          },
        }}
      >
        <Typography variant="h4">!!ONLY FANS!!</Typography>
      </Box>
      <Box
        width="100vw"
        height={{ xs: "auto", lg: 496 }}
        bgcolor="#2E2E2E"
        display="flex"
        justifyContent="center"
        alignItems="center"
        zIndex="-50"
      >
        <Grid
          container
          maxWidth={1440}
          // height={496}
          spacing={{ xs: 12, lg: 2 }}
          justifyContent="center"
          alignItems="center"
          //   bgcolor="#2E2E2E"
        >
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h5"
              lineHeight={1}
              width={400}
              textAlign="center"
              color="white"
              marginX="auto"
              marginTop={{ xs: 12, lg: 0 }}
            >
              За истинските ентусиасти, които искат да носят частица от нашата
              жизнена атмосфера със себе си, където и да отидат. Посетете нашия
              бар и попитайте за нашите тениски. Перфектни за подарък или лично
              удоволствие, те са чудесен начин да покажете подкрепата си и да
              бъдете стилни.
            </Typography>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              width={528}
              height={680}
              bgcolor="white"
              sx={{ opacity: "0.8" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              borderRadius="40px 0 40px 0"
              marginX={{ xs: "auto", lg: 0 }}
            >
              <Image width={464} src={image} alt="T-shirt" />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
