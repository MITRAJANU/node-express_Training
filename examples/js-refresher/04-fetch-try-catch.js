// JavaScript refresher: fetch returns a promise and can be handled with async/await.
// Requires Node.js 18+ because fetch is built into modern Node.

const loadTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    // 👉 KEY: network calls can fail, so always teach students to handle errors.
    console.error("Fetch failed:", error.message);
  }
};

loadTodo();
