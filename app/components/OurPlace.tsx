import { Box, Grid, Typography } from "@mui/material";
import ImageLayout from "./ImageLayout";
import ImageLayout2 from "./ImageLayout-2";
import decor1 from "@/public/decor-9.svg";
import decor2 from "@/public/decor-10.svg";
import decor3 from "@/public/decor-11.svg";
import decor4 from "@/public/decor-12.svg";
import divider from "@/public/divider.svg";
import Image from "next/image";

export default function OurPlace(): JSX.Element {
  return (
    <>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={3}>
          <Image src={decor1} alt="Decor" />
        </Grid>
        <Grid item xs={6} textAlign="center" marginBottom={5}>
          <Typography variant="h4">
            Имаш фирмено или специално събитие и не знаеш къде да отидеш
          </Typography>
        </Grid>
        <Grid item xs={3} textAlign="end">
          <Image src={decor2} alt="Decor" />
        </Grid>
        <Grid item xs={6} textAlign="center">
          <Typography variant="h5" lineHeight={1} textAlign="center">
            Празнувай специални моменти в С.И.П.И. Довери ни се за своето
            фирмено парти, рожден ден или частно събитие, за което ще се
            разказват истории.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout2 />
        </Grid>
        <Grid item xs={12} lg={6} textAlign="center">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-8em",
                right: "0",
                width: "100%",
                height: "100%",
                background: `url(${decor3.src}) center no-repeat`,
              },
            }}
          >
            <Typography variant="h4" marginBottom={1}>
              Вътрешна зала
            </Typography>
            <Typography
              variant="h5"
              width={520}
              lineHeight={1}
              marginBottom={2}
              marginX="auto"
              textAlign="center"
            >
              Ще те посрещнем с шотове и авторски коктейли в приятелска
              атмосфера и #party обстановка. Нашата вътрешна зала е сърцето на
              нощния живот, идеалното място за вечерни срещи, бурни партита и
              специални събития, където светлината и музиката създават
              неповторима атмосфера.
            </Typography>
            <Box
              width={120}
              height={120}
              border="1px solid #CCCCCC"
              borderRadius="50%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              textAlign="center"
              marginX="auto"
            >
              <Typography variant="h5">
                60 <br />
                места
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box marginY={8}>
        <Image width={1440} src={decor4} alt="Divider" />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} textAlign="center">
          <Typography variant="h4" marginBottom={1}>
            Лятна градина
          </Typography>
          <Typography
            variant="h5"
            width={520}
            lineHeight={1}
            marginBottom={2}
            marginX="auto"
            textAlign="center"
          >
            Разкошната и просторна вътрешна лятна градина е оазис на свежест и
            енергия. Със собствен бар и приятна декорация, тя е перфектното
            място за топлите нощи под открито небе. Зеленина и приглушени
            светлини превръщат градината ни в идеалната сцена за летни партита и
            тематични вечери.
          </Typography>
          <Box
            width={120}
            height={120}
            border="1px solid #CCCCCC"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            marginX="auto"
          >
            <Typography variant="h5">
              80 <br />
              места
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout />
        </Grid>
      </Grid>
      <Box marginY={8}>
        <Image
          width={1440}
          src={decor4}
          alt="Divider"
          style={{ transform: "scaleX(-1)" }}
        />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout2 />
        </Grid>
        <Grid item xs={12} lg={6} textAlign="center">
          <Typography variant="h4" marginBottom={1}>
            Тераси
          </Typography>
          <Typography
            variant="h5"
            width={520}
            lineHeight={1}
            marginBottom={2}
            marginX="auto"
            textAlign="center"
          >
            За онези, които търсят изключителност и уединение, предлагаме две
            отделни тераси на ниво 2. Всяка от тях може да бъде наета отделно и
            предоставя уникално парти изживяване. Терасите ни са идеалното място
            за частни събития, специални празненства или просто за наслада от
            нощния живот с приятели.
          </Typography>
          <Box
            width={120}
            height={120}
            border="1px solid #CCCCCC"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            marginX="auto"
          >
            <Typography variant="h5">
              80 <br />
              места
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box marginY={8}>
        <Image width={1440} src={decor4} alt="Divider" />
      </Box>
      <Box marginY={21}>
        <Image width={400} src={divider} alt="Divider" />
      </Box>
    </>
  );
}
