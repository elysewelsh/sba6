// Implement a custom error class and functions to handle different types of errors gracefully.

// needed for API call rejection/negative status
export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
};

// needed for type guards
export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
};

// input: error from other functions, output: formatted, informational error message in console
export function handleError(error: Error) {
console.log("____________________________________________________");
console.log("_______________________ERROR________________________");
    if (error instanceof APIError) {
        console.error(`[API ERROR]: `, error.message);
    } else if (error instanceof DataError) {
        console.error(`[DATA ERROR]: `, error.message);
    } else {
        console.error(`[ERROR]:`, error.message);
    }
};