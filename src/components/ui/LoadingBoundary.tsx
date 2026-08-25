import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { messages } from "@/constants/messages";
import { AppText } from "./AppText";

type LoadingBoundaryProps = {
  label?: string;
};

export function LoadingBoundary({ label }: LoadingBoundaryProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        py: 8,
        width: "100%",
      }}
      role="status"
      aria-live="polite"
    >
      <CircularProgress size={32} />
      <AppText color="text.secondary">
        {label ?? messages.loading.default}
      </AppText>
    </Box>
  );
}
