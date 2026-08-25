import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import type { ReactNode } from "react";

export type AppListItem = {
  id: string;
  primary: string;
  secondary?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onFocus?: () => void;
};

type AppListProps = {
  items: AppListItem[];
  empty?: ReactNode;
};

export function AppList({ items, empty }: AppListProps) {
  if (items.length === 0) {
    return <>{empty}</>;
  }

  return (
    <List disablePadding>
      {items.map((item) => (
        <ListItem key={item.id} disablePadding divider>
          <ListItemButton
            onClick={item.onClick}
            onMouseEnter={item.onMouseEnter}
            onFocus={item.onFocus}
          >
            <ListItemText primary={item.primary} secondary={item.secondary} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
