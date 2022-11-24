import React from "react";

import Alert from "./Alert";

export default {
  title: "Example/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: {
        type: "select",
        options: ["error", "info", "warning", "success"],
      },
    },
  },
};

const Template = (args) => {
  return <Alert {...args} />;
};

export const MuiAlert = Template.bind({});

MuiAlert.args = {
  message: "Error, please try again later",
  severity: "error",
  action: true,
};
