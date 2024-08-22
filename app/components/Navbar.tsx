"use client";

import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import MainNav from "./MainNav";
import image1 from "@/public/menu-bars.svg";
import image2 from "@/public/close.svg";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function Navbar(): JSX.Element {
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <Box
      ref={menuRef}
      width="100vw"
      display="flex"
      justifyContent="center"
      position="fixed"
      top={10}
      left={0}
      zIndex={theme.zIndex.appBar}
    >
      <AppBar>
        <Box
          width="100vw"
          height={{ xs: open ? "400px" : "auto", sm: "auto" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          position="fixed"
          top={10}
          left={0}
          zIndex={theme.zIndex.appBar}
          bgcolor={open ? "#2E2E2E" : "transparent"}
          paddingY={open ? 2 : 0}
          sx={{
            transition: "background-color 0.3s ease, padding 0.3s ease",
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              aria-label="Open/Close menu"
              onClick={() => setOpen(!open)}
              disableRipple
              sx={{
                marginTop: open ? 2 : 0,
                backdropFilter: "blur(10px)",
                backgroundColor: !open
                  ? "rgba(91, 73, 102, 0.5)"
                  : "transparent",
                boxShadow: !open ? "0 4px 15px rgba(0, 0, 0, 0.3)" : "none",
              }}
            >
              <Image
                src={open ? image2 : image1}
                alt="Menu image"
                width={open ? 20 : 32}
                height={open ? 20 : 32}
              />
            </IconButton>
            {open && (
              <Toolbar
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "auto",
                  transition: "opacity 0.3s ease",
                  opacity: open ? 1 : 0,
                }}
              >
                <MainNav closeMenu={closeMenu} />
              </Toolbar>
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
