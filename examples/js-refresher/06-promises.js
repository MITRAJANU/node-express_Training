// JavaScript refresher: promises represent work that finishes in the future.
// Node/Express connection: database calls return promises.
// React connection: API calls return promises.

const findStudentById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error("Student id is required"));
        return;
      }

      resolve({ id, name: "Ravi" });
    }, 500);
  });
};

// KEY: .then handles success and .catch handles failure.
findStudentById(101)
  .then((student) => {
    console.log("Found student:", student);
  })
  .catch((error) => {
    console.error("Lookup failed:", error.message);
  });
