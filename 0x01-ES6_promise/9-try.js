// Export a default function named guardrail that handles errors in a mathematical function.

export default function guardrail(mathFunction) {
  // Create a queue to store results and error messages.

  const queue = [];

  try {
    // Try executing the provided mathematical function and add the result to the queue.
    queue.push(mathFunction());
  } catch (err) {
    // If an error occurs, add the error message to the queue as a string.
    queue.push(err.toString());
  } finally {
    // Add a message indicating that the guardrail was processed to the queue.
    queue.push('Guardrail was processed');
  }

  // Return the queue containing results and error messages.
  return queue;
}
