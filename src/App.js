import logo from "./logo.svg";
import Button from "components/Button";
import "./App.css";

import { Paper, Typography } from "@mui/material";

import { useModeContext } from "context";

function App() {
  const { toggleMode } = useModeContext();

  return (
    <Paper className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <Typography>
        Edit <code>src/App.js</code> and save to reload.
      </Typography>

      <Button label="Switch mode" onClick={toggleMode} variant="contained" />
    </Paper>
  );
}

export default App;
