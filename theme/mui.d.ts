import { Palette, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    middleblue: Palette['primary'];
  }

  interface PaletteOptions {
    middleblue: PaletteOptions['primary'];
  }
}
