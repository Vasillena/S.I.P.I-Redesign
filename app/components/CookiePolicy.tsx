/* eslint-disable react/no-unescaped-entities */

import {
  Box,
  Link,
  List,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { getI18n } from "@/locales/server";

export default async function CookiePolicy(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <Box width="90%" fontSize={{ xs: "18px", lg: "20px" }} py={4} mx="auto">
      <Typography
        variant="h1"
        textAlign="center"
        sx={{ fontSize: { xs: "40px", sm: "60px" } }}
      >
        {t("cookie.cookie-policy")}
      </Typography>

      <Typography textAlign="center" sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-1")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-2")}
        <Link href="https://sipi.bg" target="_blank" sx={{ ml: 1 }}>
          https://sipi.bg
        </Link>{" "}
        {t("cookie.text-3")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-4")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-5")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-6")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-7")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-8")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-9")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-10")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-11")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-12")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-13")}
      </Typography>

      <List
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://support.google.com/chrome/answer/95647#zippy=%2Callow-or-block-cookies">
            {t("cookie.text-14")}
          </Link>
        </ListItem>
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
            {t("cookie.text-15")}
          </Link>
        </ListItem>
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop?redirectslug=enable-and-disable-cookies-website-preferences&redirectlocale=en-US">
            {t("cookie.text-16")}
          </Link>
        </ListItem>
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
            {t("cookie.text-17")}
          </Link>
        </ListItem>
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
            {t("cookie.text-18")}
          </Link>
        </ListItem>
        <ListItem sx={{ textAlign: "center", width: "fit-content" }}>
          <Link href="https://help.opera.com/en/latest/web-preferences/">
            {t("cookie.text-19")}
          </Link>
        </ListItem>
      </List>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-20")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-21")}
      </Typography>

      <TableContainer component={Paper} sx={{ my: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="cookie table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-22")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-23")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-24")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-25")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-26")}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "inherit" }}>
                CookieScriptConsent
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>First Party</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-27")}
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>sipi.bg</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-28")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-29")}
      </Typography>

      <TableContainer component={Paper} sx={{ my: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="cookie table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-22")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-23")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-24")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-25")}</strong>
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                <strong>{t("cookie.text-26")}</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{ fontSize: "inherit" }}>_ga_CHK3JEVFYE</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>First Party</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-30")}
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>sipi.bg</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-31")}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{ fontSize: "inherit" }}>_ga</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>First Party</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-30")}
              </TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>sipi.bg</TableCell>
              <TableCell sx={{ fontSize: "inherit" }}>
                {t("cookie.text-32")}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-33")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-34")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        <strong>{t("cookie.text-35")}</strong>
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-36")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-37")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-38")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-39")}
      </Typography>

      <Typography sx={{ fontSize: "inherit" }} paragraph>
        {t("cookie.text-40")}
      </Typography>
    </Box>
  );
}
