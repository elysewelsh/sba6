// Import the product classes, tax calculator, and API service.
// Create instances of Product by fetching product data from the API.
// Use asynchronous functions to fetch product data and display it.
// Demonstrate error handling and OOP principles in action.

import { Product, Iproduct } from './models/Product.js';
import { calculateTax } from './utils/taxCalculator.js';
import { handleRequest } from './services/apiService.js';


// INPUTS: Product, Tax, Error
// OUTPUTS: console

// 1. Define Product class
// 2. Fetch API Data
// 3. Error Handling
// 4. Discount functions
// 5. TaxCalc
// 6. Main

const catalog: Product[] = [];

handleRequest();
const something = await handleRequest();
    if (typeof something !== "undefined") {
        for (let i: number = 0; i < something.length; i++) {
            if (typeof something[i] !== "undefined") {
                if (typeof something[i].id !== "undefined" && typeof something[i].title !== "undefined" &&
                    typeof something[i].price !== "undefined" && typeof something[i]?.discountPercentage !== "undefined" &&
                    typeof something[i].category !== "undefined") {
                        const productInstance = new Product(something[i].id, something[i]?.title, something[i]?.price, 
                            something[i].discountPercentage, something[i]?.category);
                        catalog.push(productInstance);
                    } else {
                        // throw error;
                        console.log("error1");
                    }
            } else {
                // throw error;
                console.log("error2");
            }
        }
    } else {
        // throw error;
        console.log("error3");
    };
// console.log(catalog);
console.log("WELCOME TO ROSEBUD, A SIMS STORE");
console.log("Here is our product catalog:")
