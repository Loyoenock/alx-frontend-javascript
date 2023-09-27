export default function handleResponseFromAPI(promise) {
  promise
    .then((response) => {
      // When the Promise resolves, return an object with status: 200 and body: 'success'.
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      // When the Promise rejects, return an empty Error object.
      return new Error();
    })
    .then(() => {
      // Log 'Got a response from the API' for every resolution.
      console.log('Got a response from the API');
    });
}
