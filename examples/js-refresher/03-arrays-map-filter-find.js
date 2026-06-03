// JavaScript refresher: common array methods used in APIs and React UI.

const tasks = [
  { id: "1", title: "Learn JS", status: "done", points: 10 },
  { id: "2", title: "Build Express API", status: "in-progress", points: 20 },
  { id: "3", title: "Connect MongoDB", status: "todo", points: 30 }
];

const taskTitles = tasks.map((task) => task.title);
const openTasks = tasks.filter((task) => task.status !== "done");
const selectedTask = tasks.find((task) => task.id === "2");
const hasCompletedTask = tasks.some((task) => task.status === "done");
const allHaveTitles = tasks.every((task) => task.title.length > 0);
const totalPoints = tasks.reduce((sum, task) => sum + task.points, 0);

// KEY: React uses map heavily to render arrays; Express APIs use these for filtering data.
console.log({ taskTitles, openTasks, selectedTask, hasCompletedTask, allHaveTitles, totalPoints });
