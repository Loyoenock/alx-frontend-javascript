// Import the necessary functions for uploading a photo and creating a user from the 'utils' module.
import { uploadPhoto, createUser } from './utils';

// Define an asynchronous function named 'asyncUploadUser' for handling photo upload and user creation.
const asyncUploadUser = async () => {
  try {
    // Use 'await' to sequentially upload a photo and create a user, then return both results as an object.
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    // If any error occurs during the process, return an object with null values for photo and user.
    return { photo: null, user: null };
  }
};

// Export the 'asyncUploadUser' function for external use.
export default asyncUploadUser;
