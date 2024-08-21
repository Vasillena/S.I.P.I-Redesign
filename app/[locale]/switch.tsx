"use client";

import { Box, FormControlLabel, IconButton, Radio } from "@mui/material";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import flagBG from "@/public/flagBG.png";
import flagEN from "@/public/flagEN.png";
import language from "@/public/language.svg";
import { useState } from "react";

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: isLanguageOpen ? 0 : "-4.2em",
        right: "2.2em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2px 1px 0 1px",
        borderRadius: "0.5em 0 0 0",
        backgroundColor: "rgba(91, 73, 102, 0.5)",
        zIndex: "90",
        backdropFilter: "blur(10px)",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
        transition: "bottom 1s ease-out",
        cursor: "pointer",
        gap: "4px",
      }}
    >
      <IconButton onClick={toggleLanguage}>
        <Image src={language} alt="Globe" width={24} />
      </IconButton>

      <FormControlLabel
        control={
          <Radio
            checked={locale === "bg"}
            onChange={() => changeLocale("bg")}
            sx={{ display: "none" }}
          />
        }
        label={<Image src={flagBG} alt="BG flag" width={24} />}
        sx={{ margin: 0, cursor: "pointer" }}
      />

      <FormControlLabel
        control={
          <Radio
            checked={locale === "en"}
            onChange={() => changeLocale("en")}
            sx={{ display: "none" }}
          />
        }
        label={<Image src={flagEN} alt="EN flag" width={24} />}
        sx={{ margin: 0, cursor: "pointer" }}
      />
    </Box>
  );
}
