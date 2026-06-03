// JavaScript refresher: async/await makes promise-based code read top to bottom.
// Node/Express connection: controllers use async/await for DB calls.
// React connection: event handlers and effects often await API calls.

const getMarks = async () => {
  return { subject: "Backend", score: 92 };
};

const printResult = async () => {
  try {
    // KEY: await pauses this async function until the promise settles.
    const result = await getMarks();
    console.log(`${result.subject} score: ${result.score}`);
  } catch (error) {
    console.error("Could not load marks:", error.message);
  }
};

printResult();
