"use client";
import MuiCard from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import NextLink from "next/link";
import type { ReactNode } from "react";

type AppCardProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export function AppCard({ children, href, onClick, className }: AppCardProps) {
  const content = <CardContent>{children}</CardContent>;

  if (href) {
    return (
      <MuiCard className={className} variant="outlined" sx={{ height: "100%" }}>
        <CardActionArea
          component={NextLink}
          href={href}
          sx={{ height: "100%" }}
        >
          {content}
        </CardActionArea>
      </MuiCard>
    );
  }

  return (
    <MuiCard
      className={className}
      variant="outlined"
      onClick={onClick}
      sx={{ height: "100%", cursor: onClick ? "pointer" : undefined }}
    >
      {content}
    </MuiCard>
  );
}
