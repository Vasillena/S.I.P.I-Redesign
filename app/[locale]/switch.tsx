"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import blackSans from "next/font/local";
import { cn } from "@/lib/utils";

const blackSansFont = blackSans({ src: "../../public/Blacker-Sans.ttf" });

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const myFont = blackSansFont;

  return (
    <>
      <button
        className={cn(
          "w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]",
          myFont.className,
          locale === "en" && "hidden"
        )}
        type="button"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        className={cn(
          "w-[50px] h=[35px] drop-shadow-sm text-xl bg-[#F7F4F1]",
          myFont.className,
          locale === "bg" && "hidden"
        )}
        type="button"
        onClick={() => changeLocale("bg")}
      >
        BG
      </button>
    </>
  );
}
