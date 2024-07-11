import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import decor from "@/public/decor-1.svg";
import divider from "@/public/divider.svg";
import ImageLayout from "./ImageLayout";

export default function Welcome(): JSX.Element {
  return (
    <>
      <Box
        maxWidth={1440}
        display="flex"
        flexDirection={{ xs: "column", lg: "row" }}
        justifyContent="space-between"
        alignItems="flex-end"
        marginTop="148px"
        marginX={{ xs: 2, lg: 0 }}
        gap={5}
      >
        <Box>
          <Stack>
            <Box position="relative" width={0} height={0}>
              <Image
                width={472}
                src={decor}
                alt="Square decor"
                style={{ position: "absolute", top: "-6em", left: "-2em" }}
              />
            </Box>

            <Typography
              width={432}
              variant="h2"
              marginBottom={8}
              sx={{ fontSize: { xs: "40px", lg: "60px" } }}
            >
              Добре дошли <br />в Бар С.И.П.И.
            </Typography>
          </Stack>
          <Stack paddingLeft={5}>
            <Typography
              width={{ xs: 260, lg: 472 }}
              variant="h5"
              lineHeight={1}
              sx={{ fontSize: { xs: "16px", lg: "24px" } }}
            >
              Oазисът на Hip Hop музиката в сърцето на Капана. Ние сме
              вдъхновени от енергията и неповторимия стил на Hip Hop сцената.
              При нас ще се наслаждавате на авторски коктейли, парти обстановка
              и музикални изживявания. Бар С.И.П.И. е повече от място за
              напитки; това е преживяване, където парти хората се събират всеки
              уикенд, за да споделят обичта си към музиката.
            </Typography>
          </Stack>
        </Box>
        <Box>
          <ImageLayout />
        </Box>
      </Box>
      <Box marginY={21}>
        <Image width={400} src={divider} alt="Divider" />
      </Box>
    </>
  );
}
