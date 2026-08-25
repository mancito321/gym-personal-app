"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NextLink from "next/link";
import { messages } from "@/constants/messages";
import { useColorMode } from "@/theme/ColorModeProvider";

export function Nav() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Toolbar sx={{ gap: 2, px: { xs: 2, sm: 3 } }}>
        <Typography
          component={NextLink}
          href="/"
          variant="h6"
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            color: "inherit",
            fontWeight: 700,
            letterSpacing: 0.5,
          }}
        >
          {messages.brand.name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            component={NextLink}
            href="/plans"
            underline="hover"
            color="inherit"
          >
            {messages.nav.plans}
          </Link>
          <Link
            component={NextLink}
            href="/about"
            underline="hover"
            color="inherit"
          >
            {messages.nav.about}
          </Link>
          <IconButton
            onClick={toggleColorMode}
            color="inherit"
            aria-label={
              mode === "light" ? messages.nav.themeDark : messages.nav.themeLight
            }
          >
            {mode === "light" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
