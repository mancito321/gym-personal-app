"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ColorModeProvider } from "./ColorModeProvider";
import type { ReactNode } from "react";

export function AppThemeProvider({ children }: { children: ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ColorModeProvider>{children}</ColorModeProvider>
    </AppRouterCacheProvider>
  );
}
