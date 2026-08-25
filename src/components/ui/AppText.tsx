import Typography, { type TypographyProps } from "@mui/material/Typography";
import type { ReactNode } from "react";

type AppTextProps = {
  children: ReactNode;
  variant?: TypographyProps["variant"];
  component?: TypographyProps["component"];
  color?: TypographyProps["color"];
  className?: string;
  gutterBottom?: boolean;
};

export function AppText({
  children,
  variant = "body1",
  component,
  color,
  className,
  gutterBottom,
}: AppTextProps) {
  return (
    <Typography
      variant={variant}
      component={component ?? "p"}
      color={color}
      className={className}
      gutterBottom={gutterBottom}
    >
      {children}
    </Typography>
  );
}
