import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const Rollup = [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
        inlineDynamicImports: true,
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
      // resolve(),
      commonjs(),
      postcss(),
      // url(),
      terser(),
      typescript({ declaration: true }),
    ],
    external: ["react", "react-dom"],
    exclude: ["**/*.stories.tsx", "node_modules/@mui/base/**"],
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
    plugins: [typescript()],
    external: ["react", "react-dom"],
    exclude: ["**/*.stories.tsx", "node_modules/@mui/base/**"],
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
    plugins: [typescript()],
    external: ["react", "react-dom"],
    exclude: ["**/*.stories.tsx", "node_modules/@mui/base/**"],
  },
  {
    input: "theme/themes/depotCenter/index.ts",
    output: [
      {
        file: "dist/depotCenter.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/depotCenter.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
    external: ["react", "react-dom"],
    exclude: ["**/*.stories.tsx", "node_modules/@mui/base/**"],
  },
  {
    input: "src/index.tsx",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: ["react", "react-dom"],
    exclude: ["**/*.stories.tsx", "node_modules/@mui/base/**"],
  },
];

export default Rollup;
