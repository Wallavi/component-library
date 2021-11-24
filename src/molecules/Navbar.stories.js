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
Default.args = {};
