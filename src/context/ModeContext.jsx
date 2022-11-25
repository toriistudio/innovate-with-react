import { createContext, useState, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme, DARK_MODE, LIGHT_MODE } from "theme";

export const ModeContext = createContext({
  setMode: () => {},
  toggleMode: () => {},
});

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(LIGHT_MODE);

  const value = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode: () => {
        setMode((prevMode) =>
          prevMode === LIGHT_MODE ? DARK_MODE : LIGHT_MODE
        );
      },
    }),
    []
  );

  const theme = useMemo(
    () => (mode === LIGHT_MODE ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};
