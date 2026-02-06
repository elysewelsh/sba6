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
const item = await handleRequest();
    if (typeof item !== "undefined") {
        for (let i: number = 0; i < item.length; i++) {
            if (typeof item[i] !== "undefined") {
                if (typeof item[i]!.id !== "undefined" && typeof item[i]!.title !== "undefined" &&
                    typeof item[i]!.price !== "undefined" && typeof item[i]?.discountPercentage !== "undefined" &&
                    typeof item[i]!.category !== "undefined") {
                        const productInstance = new Product(item[i]!.id, item[i]!.title, item[i]!.price, 
                            item[i]!.discountPercentage, item[i]!.category);
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
console.log(`.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.`);
console.log("----------------WELCOME TO ROSEBUD, A SIMS STORE-----------------------");
console.log(`.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.`);
console.log("");
console.log("Here is our product catalog:")
console.log("_______________________________________________________________________");
for (let i: number = 0; i < catalog.length; i++) {
    catalog[i]!.displayDetails();
    console.log("_______________________________________________________________________");
    console.log("");
}