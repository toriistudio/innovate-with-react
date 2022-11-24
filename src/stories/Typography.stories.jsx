import React from "react";

import { Box, Typography as MuiTypography } from "@mui/material";

const Typography = ({ variant }) => {
  if (variant) {
    return <MuiTypography variant={variant}>{variant}</MuiTypography>;
  }

  return (
    <Box>
      <MuiTypography variant="h1" gutterBottom>
        h1. Heading
      </MuiTypography>
      <MuiTypography variant="h2" gutterBottom>
        h2. Heading
      </MuiTypography>
      <MuiTypography variant="h3" gutterBottom>
        h3. Heading
      </MuiTypography>
      <MuiTypography variant="h4" gutterBottom>
        h4. Heading
      </MuiTypography>
      <MuiTypography variant="h5" gutterBottom>
        h5. Heading
      </MuiTypography>
      <MuiTypography variant="h6" gutterBottom>
        h6. Heading
      </MuiTypography>
      <MuiTypography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </MuiTypography>
      <MuiTypography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </MuiTypography>
      <MuiTypography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </MuiTypography>
      <MuiTypography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </MuiTypography>
      <MuiTypography variant="button" display="block" gutterBottom>
        button text
      </MuiTypography>
      <MuiTypography variant="caption" display="block" gutterBottom>
        caption text
      </MuiTypography>
      <MuiTypography variant="overline" display="block" gutterBottom>
        overline text
      </MuiTypography>
    </Box>
  );
};

export default {
  title: "Theme/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "button",
        "caption",
        "overline",
      ],
    },
  },
};

const Template = (args) => <Typography {...args} />;

export const All = Template.bind({});
All.args = {};

export const Single = Template.bind({});
Single.args = {
  variant: "h1",
};
