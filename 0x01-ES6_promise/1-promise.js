export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      // If 'success' is true, resolve the Promise with the successful response object.
      const response = {
        status: 200,
        body: 'Success',
      };
      resolve(response);
    } else {
      // If 'success' is not true, reject the Promise with an error message.
      reject(new Error('The fake API is not working currently'));
    }
  });
}
