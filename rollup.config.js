import replace from "rollup-plugin-re";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import svg from "rollup-plugin-svg";
import resolve from "rollup-plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
    external: ["react", "react-dom"],
    inlineDynamicImports: true,
    input: pkg.source,
    output: [
        { file: pkg.main, format: "cjs" },
        { file: pkg.module, format: "esm" }
    ],
    plugins: [
        resolve({ extensions: [".js", ".jsx"] }),
        external(),
        babel({
            babelHelpers: "runtime",
            plugins: [
                [
                    "@babel/plugin-transform-runtime",
                    {
                        regenerator: true
                    }
                ]
            ],
            exclude: "node_modules/**"
        }),
        replace({
            patterns: [
                {
                    // regexp match with resolved path
                    match: /controls/,
                    // string or regexp
                    test: "displayDebug ^= true;",
                    // string or function to replaced with
                    replace: ""
                }
            ]
        }),
        commonjs(),
        svg({
            base64: true
        }),
        postcss(),
        terser(),
        del({ targets: ["dist/*"] })
    ]
};
