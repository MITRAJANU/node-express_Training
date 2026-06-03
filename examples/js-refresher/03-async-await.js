// JavaScript refresher: async/await makes promise-based code read top to bottom.

const getMarks = async () => {
  return { subject: "Backend", score: 92 };
};

const printResult = async () => {
  try {
    // 👉 KEY: await pauses this async function until the promise settles.
    const result = await getMarks();
    console.log(`${result.subject} score: ${result.score}`);
  } catch (error) {
    console.error("Could not load marks:", error.message);
  }
};

printResult();
