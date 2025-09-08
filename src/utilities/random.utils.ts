function pick<T>(arr: T[]): T {
  // Returns a random element from the array or undefined if the array is empty

  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error('Wrong argument: expected non-empty array');
  }

  return arr[Math.floor(Math.random() * arr.length)]!; // Guaranteed non-null due to the length check above
}

export { pick };
