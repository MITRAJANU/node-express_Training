// JavaScript refresher: ES module import/export.
// Node/Express connection: routes import controllers; app imports routes.
// React connection: components import other components and helpers.

import calculatorName, { add, multiply } from "./math.js";

console.log(calculatorName);
console.log("2 + 3 =", add(2, 3));
console.log("4 * 5 =", multiply(4, 5));

// KEY: This repo uses ES modules because package.json has "type": "module".
