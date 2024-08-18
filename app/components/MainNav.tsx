"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";
import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Box } from "@mui/material";
import Link from "next/link";
import { Switch } from "@/app/[locale]/switch";

export default function MainNav(): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useCurrentLocale();
  const t = useI18n();

  const scrollTargetRef = useRef<string | null>(null);

  const links = [
    { href: "/", label: "HOME", id: "home" },
    { href: "/#events", label: "EVENTS", id: "events" },
    { href: "/#our-place", label: "OUR PLACE", id: "our-place" },
    { href: "/#murch", label: "MURCH", id: "murch" },
    { href: "/menu", label: "MENU" },
    { href: "/#contact", label: "CONTACT", id: "contact" },
  ];

  // const handleScroll = (id: string, href: string) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     router.push(href, { scroll: false });
  //   } else {
  //     scrollTargetRef.current = id;
  //     router.push(href);
  //   }
  // };

  const handleScroll = (id: string, href: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.replace(href, { scroll: false });
    } else {
      scrollTargetRef.current = id;
      router.push(href);
    }
  };

  useEffect(() => {
    if (scrollTargetRef.current) {
      const element = document.getElementById(scrollTargetRef.current);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      scrollTargetRef.current = null;
    }
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        mx: 2,
        my: { xs: 4, sm: 0 },
        gap: { xs: 4, lg: 6 },
      }}
    >
      {links.map((link) => (
        <Box
          key={link.href}
          component="span"
          onClick={() =>
            link.id ? handleScroll(link.id, link.href) : router.push(link.href)
          }
          sx={{ cursor: "pointer" }}
        >
          {link.label}
        </Box>
      ))}
      <Switch />
    </Box>
  );
}
