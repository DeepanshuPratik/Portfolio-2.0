import React from "react";
import { Alert, Snackbar } from "@mui/material";

interface SnackbarProps {
  message: string;
  open: boolean;
  handleClose?: () => void;
  severity?: "error" | "warning" | "info" | "success";
  duration?: number;
}

const CustomSnackbar: React.FC<SnackbarProps> = ({
  message,
  open,
  handleClose,
  severity = "info",
  duration = 5000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }} 
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          fontSize: "1rem",
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
