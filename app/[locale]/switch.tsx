"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

// import { cn } from "@/lib/utils";

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      <button
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
      </button>
    </>
  );
}
