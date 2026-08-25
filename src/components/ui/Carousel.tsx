"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NextLink from "next/link";
import type { ReactNode } from "react";

export type CarouselItem = {
  id: string;
  label: ReactNode;
  href?: string;
  selected?: boolean;
};

type CarouselProps = {
  items: CarouselItem[];
};

/** Horizontal day/item strip with scroll. */
export function Carousel({ items }: CarouselProps) {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        overflowX: "auto",
        py: 1,
        px: 0.5,
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {items.map((item) => (
        <Button
          key={item.id}
          component={item.href ? NextLink : "button"}
          href={item.href}
          variant={item.selected ? "contained" : "outlined"}
          size="small"
          sx={{
            flex: "0 0 auto",
            scrollSnapAlign: "start",
            textTransform: "none",
            minWidth: 110,
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );
}
