import React from "react";
import type { Preview } from "@storybook/react";
import defaultTheme from "@wallavi/component-library/dist/theme";
import gohoTheme from "@wallavi/component-library/dist/gohoTheme";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { ThemeProvider as WallaviThemeProvider } from "@wallavi/component-library";

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
  switch (themeContext) {
    case "goho": {
      return (
        <MuiThemeProvider theme={gohoTheme}>
          <WallaviThemeProvider theme={gohoTheme}>
            <StoryFn />
          </WallaviThemeProvider>
        </MuiThemeProvider>
      );
    }
    default: {
      return (
        <MuiThemeProvider theme={defaultTheme}>
          <WallaviThemeProvider theme={defaultTheme}>
            <StoryFn />
          </WallaviThemeProvider>
        </MuiThemeProvider>
      );
    }
  }
};

const preview: Preview = {
  decorators: [withTheme],
};

export default preview;
