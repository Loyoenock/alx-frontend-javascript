function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      const data = { message: 'API response data'};
      resolve(data); //Resolve the promise with data
    }, 2000); // simulated by two seconds
  });
}

export default getResponseFromAPI;
