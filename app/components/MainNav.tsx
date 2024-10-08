"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";

import { Box } from "@mui/material";
import { Switch } from "@/app/[locale]/switch";
import { useI18n } from "@/locales/client";

export default function MainNav({
  closeMenu,
}: {
  closeMenu: () => void;
}): JSX.Element {
  const pathname = usePathname();
  const router = useRouter();
  const t = useI18n();

  const scrollTargetRef = useRef<string | null>(null);

  const links = [
    { href: "/", label: t("nav.home"), id: "home" },
    { href: "/#events", label: t("nav.events"), id: "events" },
    { href: "/#our-place", label: t("nav.ourPlace"), id: "our-place" },
    { href: "/#murch", label: t("nav.murch"), id: "murch" },
    { href: "/menu", label: t("nav.menu") },
    { href: "/#contact", label: t("nav.contact"), id: "contact" },
  ];

  const handleScroll = (id: string, href: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      router.push(href, { scroll: false });
      closeMenu();
    } else {
      scrollTargetRef.current = id;
      router.push(href);
    }
  };

  useEffect(() => {
    if (scrollTargetRef.current) {
      const targetId = scrollTargetRef.current;
      const scrollToElement = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          scrollTargetRef.current = null;
        } else {
          setTimeout(scrollToElement, 100);
        }
      };
      scrollToElement();
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
          onClick={() => {
            if (link.id) {
              handleScroll(link.id, link.href);
            } else {
              router.push(link.href);
              closeMenu();
            }
          }}
          sx={{ cursor: "pointer" }}
        >
          {link.label}
        </Box>
      ))}
      <Switch />
    </Box>
  );
}
