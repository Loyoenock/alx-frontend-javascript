export default function handleResponseFromAPI(promise) {
  // Attach handlers to the provided Promise.
  return promise
    .then(() => ({ status: 200, body: 'success' })) // When the Promise resolves, return an object with status: 200 and body: 'success'.
    .catch(() => new Error()) // When the Promise rejects, return an empty Error object.
    .finally(() => console.log('Got a response from the API')); // Regardless of resolution or rejection, log 'Got a response from the API'.
}
