import { Box, Grid, Typography } from "@mui/material";

import Bounce from "./Animations/Bounce";
import Divider from "./Divider";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Animations/Reveal";
import decor1 from "@/public/decor-15.svg";
import decor2 from "@/public/decor-16.svg";
import decor3 from "@/public/decor-6.svg";
import decor4 from "@/public/decor-17.svg";
import { getI18n } from "@/locales/server";
import image1 from "@/public/menu-1.webp";
import image2 from "@/public/menu-2.webp";
import image3 from "@/public/menu-3.webp";
import image4 from "@/public/menu-4.webp";

export default async function Cocktails(): Promise<JSX.Element> {
  const t = await getI18n();
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={10} textAlign="center" marginBottom={{ xs: 12, md: 21 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "24px", sm: "34px" } }}
          >
            {t("menu.title")}
          </Typography>
        </Grid>
        <Grid item xs={9} textAlign="center" marginBottom={{ xs: 0, md: 4 }}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: { xs: "-3.5em", sm: "-5em", lg: "-4.8em" },
                left: "0",
                width: "100%",
                height: "400%",
                background: `url(${decor3.src}) center no-repeat`,
                borderRadius: "50%",
                filter: {
                  xs: "drop-shadow(0px 2px 2px #2E2E2E)",
                  md: "drop-shadow(0px 2px 2px #CCCCCC)",
                },
                transform: { xs: "scale(0.8)", lg: "scale(1)" },
              },
            }}
          >
            <Reveal>
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "24px", sm: "34px" } }}
              >
                {t("menu.title-2")}
              </Typography>
            </Reveal>
          </Box>
        </Grid>
        <Grid item xs={9} textAlign="center">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-2em",
                left: "0",
                width: "100%",
                height: "100%",
                background: `url(${decor1.src}) center no-repeat`,
                zIndex: "-50",
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "12em",
                  left: "-6em",
                  width: "100%",
                  height: "100%",
                  background: `url(${decor2.src}) center no-repeat`,
                  zIndex: "-50",
                },
              }}
            >
              <Box
                display={{ xs: "none", md: "flex" }}
                justifyContent="flex-end"
              >
                <Image
                  width={600}
                  src={image1}
                  alt="Bartender image"
                  style={{ marginTop: "148px" }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          textAlign="right"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          marginTop={{ md: 4 }}
          alignItems={{
            xs: "center",
            md: "flex-end",
          }}
          gap={{
            xs: 8,
            md: 0,
          }}
        >
          <Box
            width={240}
            height={{ xs: 160, md: 240 }}
            bgcolor="#2E2E2E"
            borderRadius="0 40px 0 40px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            paddingTop={{ xs: 2, sm: 0 }}
            gap={2}
          >
            <Typography
              variant="body1"
              textAlign="center"
              color="white"
              paddingX={1}
              sx={{ fontSize: { xs: "18px", sm: "20px" } }}
            >
              {t("menu.text")}
            </Typography>
            <Link href="/menu">
              <Typography
                textAlign="center"
                color="white"
                sx={{
                  "&:hover": {
                    color: "#CCCCCC",
                  },
                }}
              >
                {t("menu.menu")}
              </Typography>
            </Link>
          </Box>
          <Box
            width="70%"
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Box
              width="80%"
              display="flex"
              flexDirection={{
                xs: "column",
                md: "row",
              }}
              gap={{
                xs: 6,
                md: 0,
              }}
              justifyContent="space-between"
              alignItems={{
                xs: "center",
                md: "flex-end",
              }}
              marginBottom={2}
            >
              <Bounce>
                <Image
                  width={140}
                  height={140}
                  src={image2}
                  alt="Cocktail image"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </Bounce>
              <Bounce delay={0.6}>
                <Image
                  width={140}
                  height={140}
                  src={image3}
                  alt="Cocktail image"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </Bounce>
              <Bounce delay={0.8}>
                <Image
                  width={140}
                  height={140}
                  src={image4}
                  alt="Cocktail image"
                  style={{
                    borderRadius: "50%",
                  }}
                />
              </Bounce>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "1px",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: "1px",
                  left: "-3.2em",
                  width: "100%",
                  height: "100%",
                  background: `url(${decor4.src}) center no-repeat`,
                  zIndex: "-50",
                  display: { xs: "none", sm: "none", md: "block", lg: "block" },
                },
              }}
            />
          </Box>
        </Grid>
      </Grid>
      <Box marginTop={{ xs: 6, lg: 4 }} marginBottom={{ xs: 4, lg: 0 }}>
        <Divider />
      </Box>
    </>
  );
}
