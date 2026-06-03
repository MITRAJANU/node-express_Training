// JavaScript refresher: functions, callbacks, higher-order functions, and closures.
// Express connection: middleware is just a function.
// React connection: event handlers are functions passed to components.

function greetStudent(name = "student") {
  return `Hello, ${name}`;
}

const add = (a, b) => a + b;

const runOperation = (label, operation) => {
  // KEY: A callback is a function passed into another function.
  console.log(`${label}:`, operation(10, 5));
};

runOperation("Addition", add);
runOperation("Subtraction", (a, b) => a - b);

const createCounter = () => {
  let count = 0;

  return () => {
    count += 1;
    return count;
  };
};

const nextRequestId = createCounter();

console.log(greetStudent("Asha"));
console.log("Request id:", nextRequestId());
console.log("Request id:", nextRequestId());

// Closure: the returned function remembers count even after createCounter finished.
