import { Box, Grid, Typography } from "@mui/material";

import Divider from "./Divider";
import Draw from "./Draw";
import Image from "next/image";
import ImageLayout from "./ImageLayout";
import SinglePlace from "./SinglePlace";
import decor1 from "@/public/decor-9.svg";
import decor2 from "@/public/decor-10.svg";
import decor3 from "@/public/decor-11.svg";
import decor4 from "@/public/decor-12.svg";
import ourPlace1 from "@/public/our-place-1.png";
import ourPlace2 from "@/public/our-place-2.png";
import ourPlace3 from "@/public/our-place-3.png";
import ourPlace4 from "@/public/our-place-4.png";
import ourPlace5 from "@/public/our-place-5.png";
import ourPlace6 from "@/public/our-place-6.png";
import ourPlace7 from "@/public/our-place-7.png";
import ourPlace8 from "@/public/our-place-8.png";
import ourPlace9 from "@/public/our-place-9.png";

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
        <Grid item xs={12} lg={3}>
          <Image src={decor1} alt="Decor" />
        </Grid>
        <Grid item xs={10} lg={6} textAlign="center" marginBottom={5}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "24px", lg: "34px" } }}
          >
            Имаш фирмено или специално събитие и не знаеш къде да отидеш
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3} textAlign="end">
          <Image src={decor2} alt="Decor" />
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 12, lg: 2 }}
        justifyContent="center"
        marginBottom={2}
      >
        <Grid item xs={11} lg={6} textAlign="center">
          <Typography
            variant="h5"
            lineHeight={1}
            textAlign="center"
            sx={{ fontSize: { xs: "16px", lg: "24px" } }}
            marginTop={{ xs: 8, lg: 0 }}
          >
            Празнувай специални моменти в С.И.П.И. Довери ни се за своето
            фирмено парти, рожден ден или частно събитие, за което ще се
            разказват истории.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout
            styleProp={"scaleX(-1)"}
            image1={ourPlace1}
            image2={ourPlace2}
            image3={ourPlace3}
          />
        </Grid>
        <Grid item xs={11} lg={6} textAlign="center">
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: "-8em",
                right: "-3em",
                width: "110%",
                height: "100%",
                background: {
                  xs: "none",
                  lg: `url(${decor3.src}) center no-repeat`,
                },
              },
            }}
          >
            <SinglePlace
              title={"Вътрешна зала"}
              description={
                "Ще те посрещнем с шотове и авторски коктейли в приятелска атмосфера и #party обстановка. Нашата вътрешна зала е сърцето на нощния живот, идеалното място за вечерни срещи, бурни партита и специални събития, където светлината и музиката създават неповторима атмосфера."
              }
              capacityNumber={"60"}
              capacityText="места"
            />
            {/* <Typography
              variant="h4"
              marginBottom={1}
              sx={{ fontSize: { xs: "20px", lg: "34px" } }}
            >
              Вътрешна зала
            </Typography>
            <Typography
              variant="h5"
              width={{ xs: "100%", lg: 520 }}
              lineHeight={1}
              marginBottom={2}
              marginX="auto"
              textAlign="center"
              sx={{ fontSize: { xs: "16px", lg: "24px" } }}
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
              <Typography
                variant="h5"
                sx={{ fontSize: { xs: "20px", lg: "34px" } }}
              >
                60 <br />
                места
              </Typography>
            </Box> */}
          </Box>
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={11} lg={6} textAlign="center" order={{ xs: 2, lg: 1 }}>
          <SinglePlace
            title={"Лятна градина"}
            description={
              "Разкошната и просторна вътрешна лятна градина е оазис на свежест и енергия. Със собствен бар и приятна декорация, тя е перфектното място за топлите нощи под открито небе. Зеленина и приглушени светлини превръщат градината ни в идеалната сцена за летни партита и тематични вечери."
            }
            capacityNumber={"80"}
            capacityText="места"
          />
        </Grid>
        <Grid
          item
          xs={12}
          lg={6}
          display="flex"
          justifyContent="center"
          order={{ xs: 1, lg: 2 }}
        >
          <ImageLayout
            image1={ourPlace4}
            image2={ourPlace5}
            image3={ourPlace6}
          />
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            transform: "scaleX(-1)",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Grid
        container
        maxWidth={1440}
        spacing={{ xs: 0, lg: 14 }}
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <ImageLayout
            styleProp={"scaleX(-1)"}
            image1={ourPlace7}
            image2={ourPlace8}
            image3={ourPlace9}
          />
        </Grid>
        <Grid item xs={11} lg={6} textAlign="center">
          <SinglePlace
            title={"Тераси"}
            description={
              "За онези, които търсят изключителност и уединение, предлагаме две отделни тераси на ниво 2. Всяка от тях може да бъде наета отделно и предоставя уникално парти изживяване. Терасите ни са идеалното място за частни събития, специални празненства или просто за наслада от нощния живот с приятели."
            }
            capacityNumber={"80"}
            capacityText="места"
          />
          {/* <Typography
            variant="h4"
            marginBottom={1}
            sx={{ fontSize: { xs: "20px", lg: "34px" } }}
          >
            Тераси
          </Typography>
          <Typography
            variant="h5"
            width={520}
            lineHeight={1}
            marginBottom={2}
            marginX="auto"
            textAlign="center"
            sx={{ fontSize: { xs: "16px", lg: "24px" } }}
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
          </Box> */}
        </Grid>
      </Grid>
      <Box
        marginTop={8}
        marginBottom={{ xs: 0, lg: 8 }}
        sx={{ width: { xs: "100vw", lg: 1300 } }}
      >
        <Image
          src={decor4}
          alt="Divider"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Divider />
    </>
  );
}
