import { Palette, PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    middleblue: Palette["primary"];
  }

  interface PaletteOptions {
    middleblue: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    listItemPrimary: React.CSSProperties;
    listItemSecondary: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    listItemPrimary?: React.CSSProperties;
    listItemSecondary: React.CSSProperties;
  }

  interface BreakpointOverrides {
    // default breakpoints
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    // adds custom breakpoints
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    listItemPrimary: true;
    listItemSecondary: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    filters: true;
  }
}
