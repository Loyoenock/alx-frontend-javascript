// Import necessary functions from './utils'.
import { uploadPhoto, createUser } from './utils';

// Export a function named handleProfileSignup.
export default function handleProfileSignup() {
  // Use Promise.all to execute uploadPhoto and createUser concurrently.
  return Promise.all([uploadPhoto(), createUser()])
    .then((value) => {
      // Log a formatted message with response data.
      console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
    })
    .catch(() => console.log('Signup system offline')); // Log an error message if there's an issue.
}
