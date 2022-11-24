import React from "react";

import Menu from "./Menu";

export default {
  title: "Example/Menu",
  component: Menu,
  argTypes: {
    items: { control: "array" },
  },
};

const Template = (args) => {
  // There is another option Menu component, which is a bit harder to control with args.open
  // and needs anchor element to be controlled
  return <Menu {...args} />;
};

export const MuiMenu = Template.bind({});

MuiMenu.args = {
  open: true,
  items: ["Profile", "My account", "Logout"],
};
