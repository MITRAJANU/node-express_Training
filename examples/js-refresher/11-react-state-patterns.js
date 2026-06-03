// JavaScript refresher: immutable update patterns used heavily in React.
// These examples are plain JavaScript, but they match React setState logic.

const tasks = [
  { id: "1", title: "Learn React state", status: "todo" },
  { id: "2", title: "Build API", status: "in-progress" }
];

const addTask = (currentTasks, newTask) => {
  return [...currentTasks, newTask];
};

const markDone = (currentTasks, id) => {
  return currentTasks.map((task) =>
    task.id === id ? { ...task, status: "done" } : task
  );
};

const removeTask = (currentTasks, id) => {
  return currentTasks.filter((task) => task.id !== id);
};

// KEY: Do not mutate React state directly; create new arrays/objects.
const afterAdd = addTask(tasks, { id: "3", title: "Render list", status: "todo" });
const afterUpdate = markDone(afterAdd, "1");
const afterDelete = removeTask(afterUpdate, "2");

console.log("Original:", tasks);
console.log("After add:", afterAdd);
console.log("After update:", afterUpdate);
console.log("After delete:", afterDelete);
