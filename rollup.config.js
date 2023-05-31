import typescript from "@rollup/plugin-typescript";

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
    exclude: ["**/*.stories.tsx", "src/**"],
  },
];
