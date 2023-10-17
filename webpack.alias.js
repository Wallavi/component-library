module.exports = {
  resolve: {
    alias: {
      "@mui/styled-engine": "@mui/styled-engine-sc",
    },
  },
  module: {
    rules: [{ test: /\\.(png|jp(e*)g|svg|gif)$/, use: ["@mdx-js/loader"] }],
  },
};
