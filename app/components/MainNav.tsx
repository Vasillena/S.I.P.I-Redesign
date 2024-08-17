"use client";

import { useCurrentLocale, useI18n } from "@/locales/client";

import { Box } from "@mui/material";
import Link from "next/link";
import { Switch } from "@/app/[locale]/switch";
import { usePathname } from "next/navigation";

export default function MainNav(): JSX.Element {
  const pathname = usePathname();
  const locale = useCurrentLocale();
  const t = useI18n();

  const links = [
    { href: "/", label: "HOME", active: pathname === `/${locale}` },
    {
      href: "/events",
      label: "EVENTS",
      active: pathname === `/${locale}/events`,
    },
    {
      href: "/our-place",
      label: "OUR PLACE",
      active: pathname === `/${locale}/our-place`,
    },
    {
      href: "/murch",
      label: "MURCH",
      active: pathname === `/${locale}/murch`,
    },
    {
      href: "/menu",
      label: "MENU",
      active: pathname === `/${locale}/menu`,
    },
    {
      href: "/contact",
      label: "CONTACT",
      active: pathname === `/${locale}/contact`,
    },
  ];

  return (
    <Box
      component="nav"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        mx: 2,
        my: { xs: 4, sm: 0 },
        ml: { xs: 3, sm: 1 },
        mt: { xs: 6, sm: 0 },
        gap: { xs: 2, sm: 4, lg: 6 },
      }}
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          // className={clsx(
          //   "flex items-center text-xl font-bold",
          //   link.active ? "active" : "inactive"
          // )}
          // sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   fontSize: "1.25rem",
          //   fontWeight: "bold",
          //   color: link.active ? "#6F848F" : "#415064",
          //   textDecoration: "none",
          //   "&:hover": {
          //     color: "#B0752A",
          //   },
          // }}
        >
          {link.active && (
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
                width: "3px",
                height: "3px",
                bgcolor: "#B0752A",
                borderRadius: "50%",
                mr: 2,
              }}
            />
          )}
          {link.label}
        </Link>
      ))}
      <Switch />
    </Box>
  );
}
