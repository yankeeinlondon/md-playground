/* eslint-disable unicorn/prefer-module */
/// <reference types="vitest" />
import path from "node:path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Inspect from "vite-plugin-inspect";
import Markdown, { code, link, meta } from "vite-plugin-md";
import {playground} from "./src/plugin";
import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

const config = defineConfig({
  resolve: {
    dedupe: ["vue"],
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
    },
  },
  build: {
    lib: {
      name: "particle-components",
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      
      output: {
        globals: {
          vue: "Vue",
        },
        minifyInternalExports: true,
      },
    },
  },
  test: {
    api: {
      port: 5678,
      // allows another device on the local network to view test results
      host: "0.0.0.0",
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: false,
    }),

    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Markdown({
      headEnabled: false,
      builders: [ 
        meta(), 
        link(), 
        code({
          layoutStructure: "tabular",
          injectIntoFrontmatter: true,
          theme: "duotone"
        }),
        playground()
      ],
    }),

    Inspect(),
  ],
});

export default config;
