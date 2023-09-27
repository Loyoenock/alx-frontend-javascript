// Export a default function named divideFunction that handles division.

export default function divideFunction(numerator, denominator) {
  // Check if the denominator is 0.
  if (denominator === 0) {
    // If the denominator is 0, throw an error with the message 'cannot divide by 0'.
    throw new Error('cannot divide by 0');
  } else {
    // If the denominator is not 0, perform the division and return the result.
    return numerator / denominator;
  }
}
