import { Box, Grid } from "@mui/material";

import SingleCard from "./SingleCard";
import decor from "@/public/decor-3.svg";
import { getI18n } from "@/locales/server";
import image1 from "@/public/icon-1.svg";
import image2 from "@/public/icon-2.svg";
import image3 from "@/public/icon-3.svg";

export default async function Cards(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <Grid
      container
      maxWidth={1440}
      spacing={{ xs: 20, lg: 2 }}
      justifyContent="center"
    >
      <Grid item xs={12} md={5} lg={4}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "188px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: { xs: "-3em", md: "-3em", lg: "-3em", xl: "-3em" },
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <SingleCard
            image={image1}
            title={t("card.card-1-title")}
            description={t("card.card-1-text")}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={5} lg={4} order={{ xs: 2, md: 3, lg: 2 }}>
        <SingleCard
          image={image2}
          title={t("card.card-2-title")}
          description={t("card.card-2-text")}
        />
      </Grid>
      <Grid item xs={12} md={5} lg={4} order={{ xs: 3, md: 2, lg: 3 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "188px",
            "&::after": {
              content: '""',
              position: "absolute",
              top: { xs: "-3.5em", md: "-3em", lg: "-3em", xl: "-3em" },
              left: 0,
              width: "100%",
              height: "100%",
              background: `url(${decor.src}) center no-repeat`,
            },
          }}
        >
          <SingleCard
            image={image3}
            title={t("card.card-3-title")}
            description={t("card.card-3-text")}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
