"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { messages } from "@/constants/messages";

type Props = {
  children: ReactNode;
  fallbackMessage?: string;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Stack spacing={2} sx={{ py: 4 }}>
          <Alert severity="error">
            {this.props.fallbackMessage ?? messages.errors.loadFailed}
          </Alert>
          <Button
            variant="outlined"
            onClick={() => this.setState({ hasError: false })}
          >
            {messages.errors.retry}
          </Button>
        </Stack>
      );
    }

    return this.props.children;
  }
}
