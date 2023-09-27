// This exports a default function named getResponseFromAPI.
export default function getResponseFromAPI() {
  // Simulate a boolean indicating a successful operation.
  const success = true;

  // Create and return a new Promise.
  return new Promise((resolve, reject) => {
    // Check the success condition.
    if (success) {
      // If successful, resolve the Promise with no data.
      resolve();
    } else {
      // If unsuccessful, reject the Promise.
      reject();
    }
  });
}

