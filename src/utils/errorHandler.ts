// Implement a custom error class and functions to handle different types of errors gracefully.

export class APIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "APIError";
  }
};

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "DataError";
  }
};


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