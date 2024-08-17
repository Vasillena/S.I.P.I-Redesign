"use client";

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import image1 from "@/public/icon-4.svg";
import image2 from "@/public/icon-4.svg";
import image3 from "@/public/icon-4.svg";
import image4 from "@/public/icon-4.svg";
import image5 from "@/public/menu-bars.svg";
import image6 from "@/public/close.svg";
import logo from "@/public/logo.svg";
import { motion } from "framer-motion";
import { useCurrentLocale } from "@/locales/client";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";

export default function Navbar(): JSX.Element {
  const locale = useCurrentLocale();
  const theme = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (open && "ontouchstart" in window) {
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <Box
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
            transition: "background-color 0.3s ease, padding 0.3s ease", // Add transition
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              onClick={() => setOpen(!open)}
              disableRipple
              sx={{
                marginTop: open ? 2 : 0,
                backdropFilter: "blur(10px)",
                backgroundColor:
                  isScrolled && !open
                    ? "rgba(91, 73, 102, 0.5)"
                    : "transparent",
                boxShadow: !open ? "0 4px 15px rgba(0, 0, 0, 0.3)" : "none",
              }}
            >
              <Image
                src={open ? image6 : image5}
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
                <MainNav />
              </Toolbar>
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}

{
  /* // <Box maxWidth="lg" mx="auto">
    //   <AppBar
    //     position="fixed"
    //     color="inherit"
    //     sx={{
    //       display: matchesSm ? "block" : "none",
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       zIndex: theme.zIndex.appBar,
    //       backgroundColor: isScrolled ? "#f9f7f4" : "transparent",
    //       borderBottom: isScrolled ? "1px solid #f2eee9" : "none",
    //       borderRadius: isScrolled ? "0 0 50px 50px" : 0,
    //       transition: "all 0.5s",
    //       px: 2,
    //     }}
    //   >
    //     <Toolbar
    //       sx={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         height: "64px",
    //       }}
    //     >
    //       <Link
    //         href="/"
    //         // sx={{ ml: 2, display: 'flex', alignItems: 'center' }}
    //       >
    //         <Image src={logo} alt="Logo" priority width={171} height={171} />
    //       </Link>
    //       <MainNav />
    //     </Toolbar>
    //   </AppBar>
    //   <AppBar
    //     position="fixed"
    //     color="inherit"
    //     sx={{
    //       display: matchesSm ? "none" : "block",
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       zIndex: theme.zIndex.appBar,
    //       backgroundColor: isScrolled ? "#f9f7f4" : "transparent",
    //       borderBottom: isScrolled ? "1px solid #f2eee9" : "none",
    //       borderRadius: isScrolled ? "0 0 32px 32px" : 0,
    //       transition: "all 0.5s",
    //     }}
    //   >
    //     <Toolbar
    //       sx={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         height: "64px",
    //       }}
    //     >
    //       <Link
    //         href="/"
    //         // sx={{ display: 'flex', alignItems: 'center' }}
    //       >
    //         <Image src={logo} alt="Logo" priority width={120} height={120} />
    //       </Link>
    //       <Box display="flex" gap={2}>
    //         <Link href="mailto:design.by.snezhana@gmail.com" target="_blank">
    //           <Image src={image1} alt="Icon image" width={32} height={32} />
    //         </Link>
    //         <Link
    //           href="https://www.linkedin.com/in/snezhana-aleksieva/"
    //           target="_blank"
    //         >
    //           <Image src={image2} alt="Icon image" width={32} height={32} />
    //         </Link>
    //         <Link
    //           href="https://www.behance.net/snezhana-aleksieva"
    //           target="_blank"
    //         >
    //           <Image src={image3} alt="Icon image" width={32} height={32} />
    //         </Link>
    //         <Link
    //           href="https://www.instagram.com/design.by.snezhana/"
    //           target="_blank"
    //         >
    //           <Image src={image4} alt="Icon image" width={32} height={32} />
    //         </Link>
    //       </Box>
    //       <IconButton onClick={() => setOpen(true)}>
    //         <Image src={image5} alt="Menu image" width={32} height={32} />
    //       </IconButton>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     anchor="right"
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     PaperProps={{
    //       sx: {
    //         width: 240,
    //         height: 324,
    //         borderRadius: "0 0 100px 100px",
    //         backgroundColor: "#f2eee9",
    //       },
    //     }}
    //   >
    //     <motion.div
    //       ref={menuRef}
    //       initial={{ y: "-100%" }}
    //       animate={{ y: 0 }}
    //       exit={{ y: "-100%" }}
    //       transition={{ duration: 0.5, ease: "easeOut" }}
    //       style={{
    //         display: "flex",
    //         flexDirection: "column",
    //         justifyContent: "center",
    //       }}
    //     >
    //       <IconButton
    //         onClick={() => setOpen(false)}
    //         sx={{ alignSelf: "flex-end", mr: 2, mt: -4 }}
    //       >
    //         <Image src={image6} alt="Close image" width={32} height={32} />
    //       </IconButton>
    //       <Box sx={{ mt: -4 }}>
    //         <MainNav />
    //       </Box>
    //     </motion.div>
    //   </Drawer>
    // </Box> */
}
