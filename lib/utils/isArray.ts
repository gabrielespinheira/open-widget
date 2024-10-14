/**
 * Checks if the provided value is an array.
 * 
 * @param value - The value to check.
 * @returns True if the value is an array, false otherwise.
 */
function isArray(value: unknown): value is unknown[] {
    return Array.isArray(value);
}

export { isArray }