import React from "react";

import MuiAlert from "@mui/material/Alert";

const Alert = ({ message, severity }) => {
  return <MuiAlert severity={severity}>{message}</MuiAlert>;
};

export default Alert;
