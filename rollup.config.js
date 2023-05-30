import typescript from "@rollup/plugin-typescript";
import del from "rollup-plugin-delete";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "dist/index.module.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [typescript({ declaration: true })],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
  {
    input: "theme/index.ts",
    output: [
      {
        file: "dist/theme/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "dist/theme/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript({ declaration: true }), del({ targets: "dist/*" })],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
  // {
  //   input: "theme/mui.d.ts",
  //   output: [{ file: "dist/theme/mui.d.ts", format: "es" }],
  //   plugins: [typescript({ declaration: true })],
  // },
];
