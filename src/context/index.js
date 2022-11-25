import { useContext } from "react";

import { ModeContext, ModeProvider } from "./ModeContext";

export { ModeContext, ModeProvider };
export const useModeContext = () => useContext(ModeContext);
