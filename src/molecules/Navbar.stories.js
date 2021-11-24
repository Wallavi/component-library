import React from "react";
import Navbar from "./Navbar";

export default {
  component: Navbar,
  title: "Molecules/Navbar",
  decorators: [
    (Story) => (
      <div style={{ height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
  menu: ["DASHBOARD", "PRODUCTS", "CONTENTOH", "TASKS"],
};

export const Minimized = Template.bind({});
Minimized.args = {
  menu: ["DASHBOARD", "PRODUCTS", "PROVIDERS", "CONTENTOH", "TASKS"],
  minimized: true,
};

export const Retailers = Template.bind({});
Retailers.args = {
  menu: ["DASHBOARD", "PRODUCTS", "PROVIDERS", "CONTENTOH", "TASKS"],
};
