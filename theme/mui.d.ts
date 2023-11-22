import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    middleblue: Palette['primary'];
  }

  interface PaletteOptions {
    middleblue: PaletteOptions['primary'];
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
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    listItemPrimary: true;
    listItemSecondary: true;
  }
}

