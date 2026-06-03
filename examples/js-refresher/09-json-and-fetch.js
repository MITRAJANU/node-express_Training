// JavaScript refresher: JSON and fetch.
// Requires Node.js 18+ because fetch is built into modern Node.

const taskObject = {
  title: "Learn JSON",
  status: "todo"
};

const jsonString = JSON.stringify(taskObject);
const parsedObject = JSON.parse(jsonString);

console.log("Original object:", taskObject);
console.log("JSON string:", jsonString);
console.log("Parsed object:", parsedObject);

const loadTodo = async () => {
  try {
    const response = await fetch(
      "data:application/json,%7B%22id%22%3A1%2C%22title%22%3A%22Mock%20API%20task%22%2C%22completed%22%3Afalse%7D"
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    // KEY: API calls can fail, so always teach students to handle errors.
    console.error("Fetch failed:", error.message);
  }
};

loadTodo();
