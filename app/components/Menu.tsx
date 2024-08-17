"use client";

import { Box, Typography } from "@mui/material";
import { useCurrentLocale, useI18n } from "@/locales/client";

import MenuCard from "./MenuCard";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { useState } from "react";

export default function Menu() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [selectedTab, setSelectedTab] = useState("");

  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === selectedTab
    );
    const categoryNameObj = menuList.menu.find(
      (item) => item.category === selectedTab
    );

    let categoryName = "";

    if (categoryNameObj) {
      categoryName = categoryNameObj.category;

      switch (categoryName) {
        case "Hot Drinks":
          if (locale == "bg") {
            categoryName = "Топли Напитки";
          }
          break;
        case "Soft Drinks":
          if (locale == "bg") {
            categoryName = "Безалкохолни Напитки";
          }
          break;
        case "Mixed Drinks":
          if (locale == "bg") {
            categoryName = "Смесени напитки";
          }
          break;
        case "Wine":
          if (locale == "bg") {
            categoryName = "Вино";
          }
          break;
        case "Alcohol":
          if (locale == "bg") {
            categoryName = "Алкохол";
          }
          break;
        case "Beer":
          if (locale == "bg") {
            categoryName = "Бира";
          }
          break;
        default:
          break;
      }
    }

    if (selectedCategory && categoryNameObj && categoryName) {
      return (
        <Box marginBottom={10}>
          <Typography
            variant="h2"
            textAlign="center"
            mt={4}
            sx={{ fontSize: { xs: "36px", md: "44px" } }}
          >
            {categoryName}
          </Typography>
          {selectedCategory.map((item) => (
            <Box
              maxWidth={800}
              width={{ xs: "90vw", lg: "70vw" }}
              mx="auto"
              display="flex"
              flexDirection="column"
              key={item.id}
            >
              {item["semi-category"] && (
                <Typography
                  variant="h5"
                  textAlign="center"
                  mt={2}
                  sx={{ fontSize: { xs: "20px", md: "24px" } }}
                >
                  {item["semi-category"]}
                </Typography>
              )}
              <Box display="flex" alignItems="center">
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "16px", md: "20px" } }}
                >
                  {item.name}
                </Typography>
                <Box
                  component="span"
                  sx={{
                    flexGrow: 1,
                    borderBottom: "1px dotted",
                    mx: 2,
                    pt: 1.5,
                  }}
                />
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "14px", md: "20px" } }}
                >
                  {`${item.price} / ${item.quantity}`}
                </Typography>
              </Box>
              {/* <Box display="flex" justifyContent="space-between">
                <Typography variant="h6" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                >{`${item.price} / ${item.quantity}`}</Typography>
              </Box> */}
              {item.description && (
                <Typography
                  alignSelf="flex-start"
                  textAlign="left"
                  paddingRight="40%"
                  sx={{ fontSize: { xs: "14px", md: "16px" } }}
                >
                  {item.description}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      );
    } else {
      return <Box />;
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={{ xs: 10, sm: 20 }}
      >
        <Typography
          variant="h1"
          marginBottom={4}
          sx={{ fontSize: { xs: "40px", sm: "60px" } }}
        >
          OUR MENU
        </Typography>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={2}
        >
          <MenuCard
            text1={"Hot"}
            text2={"drinks"}
            onClick={() => setSelectedTab("Hot Drinks")}
          />
          <MenuCard
            text1={"Soft"}
            text2={"drinks"}
            onClick={() => setSelectedTab("Soft Drinks")}
          />
          <MenuCard
            text1={"Cocktails"}
            onClick={() => setSelectedTab("Mixed Drinks")}
          />
          <MenuCard text1={"Wine"} onClick={() => setSelectedTab("Wine")} />
          <MenuCard
            text1={"Alcohol"}
            onClick={() => setSelectedTab("Alcohol")}
          />
          <MenuCard text1={"Beer"} onClick={() => setSelectedTab("Beer")} />
        </Box>
        {renderMenu()}
      </Box>
    </>
  );
}
