import Box from "@mui/material/Box";
import type { ReactNode } from "react";

type GalleryProps = {
  children: ReactNode;
};

/** Centered gallery: items grow from center toward the sides. */
export function Gallery({ children }: GalleryProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 2,
        width: "100%",
        "& > *": {
          flex: "1 1 260px",
          maxWidth: 360,
          minWidth: 240,
        },
      }}
    >
      {children}
    </Box>
  );
}
