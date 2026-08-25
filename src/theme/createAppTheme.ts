import { createTheme, type PaletteMode, type ThemeOptions } from "@mui/material/styles";

const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode,
    primary: {
      main: mode === "light" ? "#1b4d3e" : "#6fbfa3",
    },
    secondary: {
      main: mode === "light" ? "#8b5a2b" : "#d4a574",
    },
    background: {
      default: mode === "light" ? "#f7f5f2" : "#121212",
      paper: mode === "light" ? "#ffffff" : "#1e1e1e",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), Arial, Helvetica, sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
});

export function createAppTheme(mode: PaletteMode) {
  return createTheme(getDesignTokens(mode));
}
