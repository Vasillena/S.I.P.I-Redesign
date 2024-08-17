import { Box, Grid, Typography } from "@mui/material";

import Bounce from "./Bounce";
import Divider from "./Divider";
import Image from "next/image";
import Reveal from "./Reveal";
import decor1 from "@/public/decor-15.svg";
import decor2 from "@/public/decor-16.svg";
import decor3 from "@/public/decor-6.svg";
import decor4 from "@/public/decor-17.svg";
import image1 from "@/public/menu-1.jpg";
import image2 from "@/public/menu-2.png";
import image3 from "@/public/menu-3.png";
import image4 from "@/public/menu-4.png";

export default function Cocktails(): JSX.Element {
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={10} textAlign="center" marginBottom={{ xs: 6, md: 21 }}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "24px", lg: "34px" } }}
          >
            Ние се грижим за музиката, храната и напитките според твоите
            предпочитания, а ти се наслаждаваш на доброто настроение и
            компанията на твоите хора.
          </Typography>
        </Grid>
        <Grid
          item
          xs={9}
          // justifyContent="flex-end"
          textAlign="center"
          marginBottom={{ xs: 0, md: 4 }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: { xs: "-3.2em", lg: "-4.2em" },
                left: "0",
                width: "100%",
                height: "400%",
                background: `url(${decor3.src}) center no-repeat`,
                borderRadius: "50%",
                filter: "drop-shadow(0px 2px 2px #CCCCCC)",
                transform: { xs: "scale(0.8)", lg: "scale(1)" },
              },
            }}
          >
            <Reveal>
              <Typography
                variant="h5"
                // position="relative"
                // top="5.2em"
                // left="-2.3em"
                sx={{ fontSize: { xs: "24px", lg: "34px" } }}
              >
                НАШИТЕ ПРЕДЛОЖЕНИЯ
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

              {/* <Box
                  width={{ sm: "400px", md: "500px", lg: "600px" }}
                  height={{ sm: "200px", md: "300px", lg: "400px" }}
                  // width="600px"
                  // height="400px"
                  // marginLeft="auto"
                  // paddingTop="120px"
                >
                  <Image
                    src={image1}
                    fill
                    objectFit="contain"
                    alt="Bartender image"
                    style={{ marginTop: "60px", marginLeft: { sm: "260px" } }}
                  />
                </Box> */}
              {/* </Box> */}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={9}
          textAlign="right"
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
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
            height={240}
            bgcolor="#2E2E2E"
            borderRadius="0 40px 0 40px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              textAlign="center"
              color="white"
              sx={{ fontSize: { xs: "16px", lg: "24px" } }}
            >
              Cocktail’s first, because no great story ever started with a glass
              of water 
            </Typography>
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
      <Divider />
    </>
  );
}
