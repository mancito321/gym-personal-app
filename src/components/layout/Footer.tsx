import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { messages } from "@/constants/messages";

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        px: { xs: 2, sm: 3 },
        borderTop: 1,
        borderColor: "divider",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        {messages.footer.copyright}
      </Typography>
    </Box>
  );
}
