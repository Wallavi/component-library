import "../src/index.css";
import React from "react";

import { Preview } from "@storybook/react";
import theme from "../dist/theme";
// import gohoTheme from "../theme/themes/goho";
import gohoTheme from "../dist/gohoTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
// import { ThemeProvider } from "../src/theme/wrapper";
import { ThemeProvider } from "../dist";

console.log("gohoTheme", gohoTheme);

import { DecoratorFn } from "@storybook/react";

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

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Theme for the components",
    defaultValue: "default",
    toolbar: {
      // The icon for the toolbar item
      icon: "circlehollow",
      // Array of options
      items: [
        { value: "default", icon: "circlehollow", title: "default" },
        { value: "goho", icon: "circle", title: "goho" },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

export const withTheme: DecoratorFn = (StoryFn, context) => {
  // Get values from story parameter first, else fallback to globals
  const themeContext = context.parameters.theme || context.globals.theme;
  // const storyTheme = theme === "default" ? undefined : gohoTheme;
  switch (themeContext) {
    case "goho": {
      return (
        <ThemeProvider theme={gohoTheme}>
          <MuiThemeProvider theme={gohoTheme}>
            <StoryFn />
          </MuiThemeProvider>
        </ThemeProvider>
      );
    }
    default: {
      return (
        <ThemeProvider theme={theme}>
          <MuiThemeProvider theme={theme}>
            <StoryFn />
          </MuiThemeProvider>
        </ThemeProvider>
      );
    }
  }
};

const preview: Preview = {
  decorators: [withTheme],
};

export default preview;
