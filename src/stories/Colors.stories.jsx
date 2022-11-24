import React from "react";
import get from "lodash/get";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Colors = ({ paletteName }) => {
  const theme = useTheme();

  const paletteTheme = get(theme, `palette[${paletteName}]`);

  return Object.keys(paletteTheme).map((paletteKey) => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={180}
      width={180}
      key={`palette-${paletteName}-${paletteKey}`}
      style={{
        backgroundColor: paletteTheme[paletteKey],
        color: theme.palette.getContrastText(paletteTheme[paletteKey]),
      }}
    >
      <Typography>
        {paletteName}.{paletteKey}
      </Typography>
    </Box>
  ));
};

const PALETTE_NAMES = ["primary", "secondary", "text", "background"];

export default {
  title: "Theme/Colors",
  component: Colors,
};

const Template = (args) => {
  const paletteNames = PALETTE_NAMES;

  return (
    <Box display="flex" flexDirection="column">
      {paletteNames.map((paletteName) => (
        <Box display="flex" key={`palette-${paletteName}`}>
          <Colors paletteName={paletteName} />
        </Box>
      ))}
    </Box>
  );
};

export const All = Template.bind({});
All.args = {};
