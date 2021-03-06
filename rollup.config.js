import vue from "rollup-plugin-vue2";
import css from "rollup-plugin-css-porter";
import buble from "@rollup/plugin-buble";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import strip from "@rollup/plugin-strip";
import { uglify } from "rollup-plugin-uglify";

const production = process.env.BUILD === "production";
const distDir = "examples/static/dist";

export default {
  input: "src/index.js",
  output: {
    file: `${distDir}/js/vue-weather-widget${production ? ".min.js" : ".js"}`,
    name: "VueWeatherWidget",
    format: "cjs", //'umd'
  },
  external: ["vue"],
  plugins: [
    vue(),
    css({
      minified: production,
      dest: `${distDir}/css/vue-weather-widget.css`,
    }),
    buble(),
    nodeResolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs(),
    production && strip(),
    production && uglify(),
  ],
};
