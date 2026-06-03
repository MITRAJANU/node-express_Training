// Named exports are good when one file exposes multiple helpers.
export const add = (a, b) => a + b;

export const multiply = (a, b) => a * b;

// Default exports are good when the file has one main thing.
const calculatorName = "Training calculator";

export default calculatorName;
