import { defineConfig } from "tsup";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import packageJson from "./package.json";

export default defineConfig({
  clean: true,
  dts: true,
  external: Object.keys(packageJson.peerDependencies),
  entry: ["src"],
  outDir: "dist",
  platform: "node",
  target: "esnext",
  format: ["esm", "cjs"],
  loader: {
    ".js": "jsx",
  },
  esbuildPlugins: [
    vanillaExtractPlugin({
      outputCss: false,
    }),
  ],
});
