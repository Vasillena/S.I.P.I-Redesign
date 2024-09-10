import { Box, Grid, Typography } from "@mui/material";

import Image from "next/image";
import decor1 from "@/public/decor-9.svg";
import decor2 from "@/public/decor-10.svg";
import { getI18n } from "@/locales/server";
import logo from "@/public/logo-1.svg";

export default async function Final(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={12} lg={3}>
          <Image src={decor1} alt="Decor" />
        </Grid>
        <Grid item xs={10} lg={6} textAlign="center" marginBottom={5}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "24px", sm: "34px" } }}
          >
            {t("final.title")}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} textAlign="end">
          <Image src={decor2} alt="Decor" />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              position: "relative",
              width: "300px",
              height: "300px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                background: `url(${logo.src}) center no-repeat`,
                zIndex: "-50",
                animation: "rotate 10s linear infinite",
                scale: { xs: "0.5", md: "1" },
              },
              "@keyframes rotate": {
                "0%": {
                  transform: "rotate(0deg)",
                },
                "50%": {
                  transform: "rotate(180deg)",
                },
                "100%": {
                  transform: "rotate(360deg)",
                },
              },
            }}
          >
            <Typography
              variant="body1"
              position="relative"
              top={{ xs: "5.5em", sm: "3.5em" }}
              textAlign="center"
              sx={{ fontSize: { xs: "24px", sm: "34px" } }}
            >
              {t("final.text")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
