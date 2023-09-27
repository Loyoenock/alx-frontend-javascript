function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = { message: 'API response data' };
      resolve(data); // Resolve the promise with the data
    }, 2000); // Simulated delay of 2 seconds
  });
}

export default getResponseFromAPI;
