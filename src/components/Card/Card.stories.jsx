import React from "react";

import Avatar from "components/Avatar";

import Card from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select", options: ["outline", "elevation"] },
    },
  },
};

const Template = (args) => <Card {...args} />;

export const Sample = Template.bind({});

Sample.args = {
  content:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
  variant: "outline",
  footer: true,
  imageSrc:
    "https://images.unsplash.com/photo-1515443961218-a51367888e4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
  title: "Shrimp and Chorizo Paella",
  subtitle: "September 14, 2022",
  Avatar: <Avatar bgColor="red" letter="D" />,
};
