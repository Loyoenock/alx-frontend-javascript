// Export a function named "loadBalancer" that uses Promise.race to prioritize between China and US downloads.
export default function loadBalancer(chinaDownload, USDownload) {
  // Return a Promise that resolves or rejects based on which download completes first.
  return Promise.race([chinaDownload, USDownload]);
}
