import useMuiMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useMediaQuery = () => {
  const theme = useTheme();

  const isSmallScreen = useMuiMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMuiMediaQuery(theme.breakpoints.down("md"));

  return {
    isMobileScreen: isSmallScreen,
    isTabletScreen: !isSmallScreen && isMediumScreen,
    isDesktopScreen: !isSmallScreen && !isMediumScreen,
  };
};

export default useMediaQuery;
