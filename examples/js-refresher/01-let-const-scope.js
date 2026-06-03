// JavaScript refresher: block scope with let and const.

const courseName = "Backend Masterclass";

if (true) {
  let topic = "Node.js";
  const day = 1;

  // 👉 KEY: let and const are block-scoped, so they only exist inside this if block.
  console.log(`${courseName}: Day ${day} starts with ${topic}`);
}

// Uncomment this line during class to show the ReferenceError:
// console.log(topic);

const student = {
  name: "Asha",
  role: "student"
};

// 👉 KEY: const prevents reassignment, but object properties can still change.
student.role = "team lead";
console.log(student);
