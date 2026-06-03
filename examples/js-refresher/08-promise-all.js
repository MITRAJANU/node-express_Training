// JavaScript refresher: Promise.all runs independent async work in parallel.
// Use it when the second operation does not depend on the first result.

const wait = (label, ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`${label} loaded`), ms);
  });
};

const loadSequentially = async () => {
  const user = await wait("User", 300);
  const tasks = await wait("Tasks", 300);
  return [user, tasks];
};

const loadInParallel = async () => {
  // KEY: Promise.all is faster here because both waits start together.
  return Promise.all([wait("User", 300), wait("Tasks", 300)]);
};

console.time("sequential");
console.log(await loadSequentially());
console.timeEnd("sequential");

console.time("parallel");
console.log(await loadInParallel());
console.timeEnd("parallel");
