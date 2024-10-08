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
            variant="body1"
            textAlign="center"
            my={4}
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
                  variant="body1"
                  textAlign="center"
                  mt={2}
                  sx={{ fontSize: { xs: "20px", md: "24px" } }}
                >
                  {item["semi-category"]}
                </Typography>
              )}
              <Box display="flex" alignItems="center">
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "16px", md: "20px" } }}
                >
                  {item.name}
                </Typography>
                <Box
                  component="span"
                  sx={{
                    flexGrow: 1,
                    borderBottom: {
                      xs: "1px dotted #f0f0f0",
                      sm: "1px dotted black",
                    },
                    mx: 2,
                    pt: 1.5,
                  }}
                />
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "14px", md: "20px" } }}
                >
                  {`${item.price} / ${item.quantity}`}
                </Typography>
              </Box>
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
        mt={{ xs: 16, sm: 20 }}
      >
        <Typography
          variant="h1"
          marginBottom={4}
          sx={{ fontSize: { xs: "40px", sm: "60px" } }}
        >
          {t("menu.menu-2")}
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          gap={{ xs: 0, md: 2 }}
        >
          <MenuCard
            text1={t("menu.hotDrinks-1")}
            text3={t("menu.hotDrinks-2")}
            onClick={() => setSelectedTab("Hot Drinks")}
            active={selectedTab === "Hot Drinks"}
          />
          <MenuCard
            text1={t("menu.softDrinks-1")}
            text2={locale === "bg" ? t("menu.softDrinks-2") : null}
            text3={t("menu.softDrinks-3")}
            onClick={() => setSelectedTab("Soft Drinks")}
            active={selectedTab === "Soft Drinks"}
          />
          <MenuCard
            text1={t("menu.mixedDrinks")}
            onClick={() => setSelectedTab("Mixed Drinks")}
            active={selectedTab === "Mixed Drinks"}
          />
          <MenuCard
            text1={t("menu.wine")}
            onClick={() => setSelectedTab("Wine")}
            active={selectedTab === "Wine"}
          />
          <MenuCard
            text1={t("menu.alcohol")}
            onClick={() => setSelectedTab("Alcohol")}
            active={selectedTab === "Alcohol"}
          />
          <MenuCard
            text1={t("menu.beer")}
            onClick={() => setSelectedTab("Beer")}
            active={selectedTab === "Beer"}
          />
        </Box>
        {renderMenu()}
      </Box>
    </>
  );
}
