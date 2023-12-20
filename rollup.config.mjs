import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import typescript from "rollup-plugin-typescript2";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
// import url from "@rollup/plugin-url";
import { babel } from "@rollup/plugin-babel";

const Rollup = [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true,
        exports: "auto",
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
        inlineDynamicImports: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ extensions: [".tsx", ".ts"] }),
      commonjs({
        exclude: [
          "node_modules/@mui/base/**",
        ],
      }),
      postcss(),
      // url(),
      typescript({ declaration: true }),
      babel({
        extensions: [".ts", ".tsx"],
        exclude: "node_modules/**",
      }),
      terser(),
    ],
    external: ["react", "react-dom", "@emotion/react", "@mui/material", "@mui/base"],
    exclude: [
      "**/*.stories.tsx",
      "node_modules/@mui/base/**",
      "**/*.example.tsx",
    ],
  },
  {
    input: "theme/index.ts",
    output: [
      {
        file: "dist/theme.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/theme.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ declaration: true })],
    external: ["react", "react-dom"],
    exclude: [
      "**/*.stories.tsx",
      "node_modules/@mui/base/**",
      "**/*.example.tsx",
    ],
  },
  {
    input: "theme/themes/goho/index.ts",
    output: [
      {
        file: "dist/gohoTheme.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/gohoTheme.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ declaration: true })],
    external: ["react", "react-dom"],
    exclude: [
      "**/*.stories.tsx",
      "node_modules/@mui/base/**",
      "**/*.example.tsx",
    ],
  },
  {
    input: "src/index.tsx",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: ["react", "react-dom"],
    exclude: [
      "**/*.stories.tsx",
      "node_modules/@mui/base/**",
      "**/*.example.tsx",
    ],
  },
];

export default Rollup;
