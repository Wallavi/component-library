import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import url from "@rollup/plugin-url";
// import babel from "@rollup/plugin-babel";

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
      resolve(),
      commonjs(),
      postcss(),
      url(),
      terser(),
      typescript({ declaration: true }),
    ],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
  // {
  //   input: 'src/index.tsx',
  //   output: {
  //     dir: 'dist',
  //     format: 'esm',
  //     sourcemap: true,
  //     inlineDynamicImports: true,
  //   },
  //   plugins: [
  //     peerDepsExternal(),
  //     resolve(),
  //     commonjs(),
  //     postcss({
  //       extract: true, // Extract the CSS to a separate file
  //     }),
  //     typescript({ declaration: true })
  //     // babel({ babelHelpers: 'bundled', extensions: ['.tsx'] }),
  //   ],
  //   external: ['react', 'react-dom'],
  // },
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
    exclude: "**/*.stories.tsx",
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
    exclude: "**/*.stories.tsx",
  },
  // {
  //   input: ["src/index.tsx", "theme/index.ts", "theme/themes/goho/index.ts"], // Include theme in the main bundle
  //   output: [
  //     {
  //       file: "dist/index.js",
  //       format: "cjs",
  //       sourcemap: true,
  //       inlineDynamicImports: true,
  //     },
  //     {
  //       file: "dist/index.esm.js",
  //       format: "esm",
  //       sourcemap: true,
  //       inlineDynamicImports: true,
  //     },
  //   ],
  //   plugins: [
  //     peerDepsExternal(),
  //     resolve(),
  //     commonjs(),
  //     postcss(),
  //     terser(),
  //     typescript({ declaration: true }),
  //   ],
  //   external: ["react", "react-dom"],
  //   exclude: "**/*.stories.tsx",
  // },
  // {
  //   input: "src/index.ts",
  //   output: [{ file: "dist/types.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
  {
    input: "src/index.tsx",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
];

export default Rollup;
