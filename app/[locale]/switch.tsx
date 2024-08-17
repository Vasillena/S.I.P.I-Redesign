"use client";

import { Box, Button, IconButton } from "@mui/material";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import flagBG from "@/public/flagBG.png";
import flagEN from "@/public/flagEN.png";
import language from "@/public/language.svg";
import { useState } from "react";

// import { cn } from "@/lib/utils";

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const toggleLanguage = () => {
    setIsLanguageOpen((prev) => !prev);
  };

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          bottom: isLanguageOpen ? 0 : "-3.8em",
          right: "2.2em",
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          alignItems: "center",
          padding: "6px 1px 0 1px",
          borderRadius: "0.5em 0 0 0",
          backgroundColor: "rgba(91, 73, 102, 0.5)",
          zIndex: "90",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          transition: "bottom 1s ease-out",
          cursor: "pointer",
        }}
        // className={`${classes.language} ${
        //   isLanguageOpen ? classes["language-open"] : ""
        // }`}
      >
        <IconButton onClick={toggleLanguage}>
          <Image src={language} alt="Globe" width={20} />
        </IconButton>
        <label>
          <input
            type="radio"
            name="language"
            value="bg"
            onChange={() => changeLocale("bg")}
            checked={locale === "bg"}
            style={{ display: "none" }}
          />
          <Image src={flagBG} alt="BG flag" width={24} />
        </label>
        <label>
          <input
            type="radio"
            name="language"
            value="en"
            onChange={() => changeLocale("en")}
            checked={locale === "en"}
            style={{ display: "none" }}
          />
          <Image src={flagEN} alt="EN flag" width={24} />
        </label>
      </Box>
      {/* <button
        className="w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]"
        // myFont.className,
        // locale === "en" && "hidden"

        type="button"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        className="w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]"
        // myFont.className,
        // locale === "bg" && "hidden"

        type="button"
        onClick={() => changeLocale("bg")}
      >
        BG
      </button> */}
    </>
  );
}
