import "../src/index.css";
import React from "react";

import { Preview } from "@storybook/react";
import theme from "../theme/theme";
import { ThemeProvider } from "@mui/material/styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "Light",
    values: [
      {
        name: "Light",
        value: "#fff",
      },
      {
        name: "Dark",
        value: "#474747",
      },
    ],
  },
};

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
