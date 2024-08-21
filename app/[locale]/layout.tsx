import "./globals.css";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Poiret_One } from "next/font/google";
import { Provider } from "./provider";
import { Switch } from "./switch";
// import Script from "next/script";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";

const poiretOneFont = Poiret_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  let title, description, keywords;

  if (locale === "bg") {
    title = "Бар С.И.П.И | sipi.bg";
    description =
      "Добре дошли в С.И.П.И - мястото за бар ентусиасти! При нас ще се наслаждавате на авторски коктейли, парти обстановка и музикални изживявания. Бар С.И.П.И е повече от място за напитки; това е преживяване, където парти хората се събират, за да споделят обичта си към музиката.";
    keywords = [
      "S.I.P.I",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  } else if (locale === "en") {
    title = "Bar S.I.P.I | sipi.bg";
    description =
      "Welcome to S.I.P.I – a destination for bar enthusiasts! With us you will enjoy signature cocktails, party atmosphere and musical experiences. S.I.P.I Bar is more than a place for drinks; it's an experience where party people come together to share their love of music";
    keywords = [
      "S.I.P.I",
      "СИПИ",
      "бар СИПИ",
      "СИПИ Пловдив",
      "бар Пловдив",
      "бар Капана",
      "Пловдив",
      "Капана",
      "коктейл бар Пловдив",
      "коктейл бар Капана",
      "парти",
      "коктейли",
      "атмосфера",
      "нощен живот",
      "SIPI",
      "bar SIPI",
      "Sipi Plovdiv",
      "bar Plovdiv",
      "bar Kapana",
      "Plovdiv",
      "Kapana",
      "cocktail bar Plovdiv",
      "cocktail bar Kapana",
      "parties",
      "cocktails",
      "vibe",
      "nightlife",
    ];
  }

  const alternates = {
    canonical: locale === "en" ? "/en" : "/",
    languages: {
      bg: "/bg",
      en: "/en",
    },
  };

  const metadataBase = new URL("https://sipi.bg");

  return {
    title,
    description,
    keywords,
    alternates,
    metadataBase,
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body className={poiretOneFont.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Provider locale={locale}>
              <Navbar />
              {children}
              <Switch />
              <Footer />
            </Provider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      {/* <Script
        type="text/javascript"
        charset="UTF-8"
        src="//cdn.cookie-script.com/s/573dfe802bd14402d4b50415b57497c6.js"
      ></Script> */}
    </html>
  );
}
