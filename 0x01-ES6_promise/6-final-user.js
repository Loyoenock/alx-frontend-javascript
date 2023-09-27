// Import the signUpUser and uploadPhoto functions from their respective modules.
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

// Export a function named handleProfileSignup that handles profile signup.
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to concurrently execute signUpUser and uploadPhoto promises.
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    // Transform the results into an array of objects with status and value or reason.
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
