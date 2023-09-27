// Export a function named signUpUser.
export default function signUpUser(firstName, lastName) {
  // Return a resolved Promise with user information.
  return Promise.resolve({
    firstName: `${firstName}`,
    lastName: `${lastName}`,
  });
}
