import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "components/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "components/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
      {
        file: "components/index.module.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [typescript()],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
  {
    input: "theme/index.ts",
    output: [
      {
        file: "theme/index.js",
        format: "cjs",
        sourcemap: true,
      },
      {
        file: "theme/index.esm.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [typescript()],
    external: ["react", "react-dom"],
    exclude: "**/*.stories.tsx",
  },
];
