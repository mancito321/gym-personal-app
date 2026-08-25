import Box from "@mui/material/Box";
import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <Box
        component="main"
        sx={{
          flex: 1,
          width: "100%",
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 4 },
        }}
      >
        <ErrorBoundary>{children}</ErrorBoundary>
      </Box>
      <Footer />
    </Box>
  );
}
