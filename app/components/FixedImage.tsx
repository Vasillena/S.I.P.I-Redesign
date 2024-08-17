"use client";

import { Box, Typography } from "@mui/material";

import Image from "next/image";
import decor1 from "@/public/decor-4.svg";
import image1 from "@/public/fixed-1.png";
import image2 from "@/public/fixed-2.png";
import { useBreakpoints } from "../utils/useBreakpoints";

export default function FixedImage(): JSX.Element {
  const { mobile } = useBreakpoints();

  return (
    <>
      <Box position="relative" marginLeft="auto" width={0} height={0}>
        <Image
          width={229}
          src={decor1}
          alt="Logo decor"
          style={{ position: "absolute", top: "3em", right: 0 }}
        />
      </Box>
      <Box
        marginTop={21}
        sx={{
          position: "relative",
          top: "1em",
          width: "100%",
          height: "600px",
          //   height: "100vh",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            // background: `url(${image.src}) center/100% no-repeat fixed`,
            background: mobile
              ? `url(${image2.src}) center/100% no-repeat`
              : `url(${image1.src}) center/100% no-repeat fixed`,
            //             backgroundPosition: "center",
            //   backgroundSize: "100%",
            //   backgroundRepeat: "no-repeat",
            //   backgroundAttachment: "fixed",
            opacity: "0.6",
            zIndex: "-1",
          },
        }}
      >
        <Box>
          <Box>
            <Typography
              width={{ xs: 300, sm: 520 }}
              variant="h5"
              textAlign="center"
              border="1px solid black"
              padding="60px 20px"
              sx={{ fontSize: { xs: "18px", sm: "24px" } }}
            >
              Отдай се на специалните моменти в С.И.П.И и се забавлявай с твоите
              хора в компанията на най-добрата музика от любимите ти български
              DJ. Ще те посрещнем с шотове и авторски коктейли в приятелска
              атмосфера и #party обстановка, в която ще се забавляваш до зори.
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
