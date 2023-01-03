import React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function AlertMessage({ message, error }) {
  return (
    <div>
      <Stack
        sx={{ width: "60%", py: 0 }}
        spacing={2}
      >
        {message && <Alert severity="success">{message}</Alert>}
        {error && <Alert severity="error">{error}</Alert>}
      </Stack>
    </div>
  );
}

export default AlertMessage;
