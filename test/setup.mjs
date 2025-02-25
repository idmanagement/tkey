import Register from "@babel/register";
import FormData from "form-data";
import JSDOM from "jsdom-global";
import fetch from "node-fetch";
import path from "path";
import { register } from "ts-node";

JSDOM(``, {
  url: "http://localhost",
});

// const storeFn = {
//   getItem(key) {
//     return this[key];
//   },
//   setItem(key, value) {
//     this[key] = value;
//   },
// };
// globalThis.localStorage = { ...storeFn };
// globalThis.sessionStorage = { ...storeFn };

register({
  project: path.resolve(".", "tsconfig.json"),
  require: ["tsconfig-paths/register"],
  transpileOnly: true,
  compilerOptions: { module: "commonjs" },
});

Register({
  extensions: [".ts", ".js"],
  rootMode: "upward",
});

globalThis.fetch = fetch;

globalThis.FormData = FormData;
