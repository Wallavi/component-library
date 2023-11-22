// @ts-ignore
import InterFont from "./assets/Inter-VariableFont_slnt,wght.ttf";

const MuiCssBaselineStyles = {
  MuiCssBaseline: {
    styleOverrides: `
      @font-face {
        font-family: 'Inter';
        font-style: normal;
        font-display: swap;
        font-weight: 400;
        src: local('Inter'), local('Inter-Regular'), url(${InterFont}) format('truetype');
      }
    `,
  },
};

export default MuiCssBaselineStyles;
