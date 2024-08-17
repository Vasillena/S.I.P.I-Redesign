"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { useCurrentLocale, useI18n } from "@/locales/client";

import Image from "next/image";
import image1 from "@/public/menu-5.svg";
import image2 from "@/public/menu-5.svg";
import image3 from "@/public/menu-5.svg";
import image4 from "@/public/menu-5.svg";
import image5 from "@/public/menu-5.svg";
import image6 from "@/public/menu-5.svg";
import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { useState } from "react";

// import classes from "./Menu.module.css";

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
        <Box>
          <Typography variant="h2">{categoryName}</Typography>
          {selectedCategory.map((item) => (
            <Box key={item.id}>
              {item["semi-category"] && (
                <Typography>{item["semi-category"]}</Typography>
              )}
              <Box>
                <Typography>{item.name}</Typography>
                <Typography>{`${item.price} / ${item.quantity}`}</Typography>
              </Box>
              {item.description && <Typography>{item.description}</Typography>}
            </Box>
          ))}
        </Box>
      );
    } else {
      return <Box></Box>;
    }
  };

  return (
    <>
      <Box>
        <Typography variant="h1">{t("title")}</Typography>
        <Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Hot Drinks")}>
              <Image width={100} height={100} src={image1} alt="Coffee icon" />
            </IconButton>
            <Typography textAlign="center">{t("hot-drinks")}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Soft Drinks")}>
              <Image
                width={100}
                height={100}
                src={image2}
                alt="Soft drinks icon"
              />
            </IconButton>
            <Typography>{t("soft-drinks")}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Mixed Drinks")}>
              <Image
                width={100}
                height={100}
                src={image3}
                alt="Cocktail icon"
              />
            </IconButton>
            <Typography>{t("cocktails")}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Wine")}>
              <Image width={100} height={100} src={image4} alt="Wine icon" />
            </IconButton>
            <Typography>{t("wine")}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Alcohol")}>
              <Image width={100} height={100} src={image5} alt="Alcohol icon" />
            </IconButton>
            <Typography>{t("alcohol")}</Typography>
          </Box>
          <Box>
            <IconButton onClick={() => setSelectedTab("Beer")}>
              <Image width={100} height={100} src={image6} alt="Beer icon" />
            </IconButton>
            <Typography>{t("beer")}</Typography>
          </Box>
        </Box>
        {renderMenu()}
      </Box>
    </>
  );
}
