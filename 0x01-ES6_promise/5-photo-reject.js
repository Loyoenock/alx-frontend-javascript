// Export a function named uploadPhoto.
export default function uploadPhoto(filename) {
  // Return a rejected Promise with an error message indicating the filename cannot be processed.
  return Promise.reject(Error(`${filename} cannot be processed`));
}
