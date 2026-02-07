// Import the product classes, tax calculator, and API service.
// Create instances of Product by fetching product data from the API.
// Use asynchronous functions to fetch product data and display it.
// Demonstrate error handling and OOP principles in action.

import { Product } from './models/Product.js';
// calculateTax was implemented in displayDetails within the Product class and module. Sorry.
import { calculateTax } from './utils/taxCalculator.js';
import { handleRequest } from './services/apiService.js';
import { DataError, handleError } from './utils/errorHandler.js'



const catalog: Product[] = [];
try {
// print catalog heading
    heading();
// call function from apiService.ts
    handleRequest();
// wait for response from API call
    const item = await handleRequest();
//type guard
        if (typeof item !== "undefined") {
// loop through API response array and construct Product instances from response properties
            for (let i: number = 0; i < item.length; i++) {
                if (typeof item[i] !== "undefined") {
                    if (typeof item[i]!.id !== "undefined" && typeof item[i]!.title !== "undefined" &&
                        typeof item[i]!.price !== "undefined" && typeof item[i]?.discountPercentage !== "undefined" &&
                        typeof item[i]!.category !== "undefined") {
                            const productInstance = new Product(item[i]!.id, item[i]!.title, item[i]!.price, 
                                item[i]!.discountPercentage, item[i]!.category);
                            catalog.push(productInstance);
                        } else {
                            throw (new DataError(`Properties of item ${i} are undefined}`))
                        }
                } else {
                    throw (new DataError(`Item ${i} was undefined`))
                }
            }
        } else {
            throw (new DataError(`Data from source is undefined`))
        };
// loop through catalog array and format data into text output
    for (let i: number = 0; i < catalog.length; i++) {
        catalog[i]!.displayDetails();
    }
}
catch(e) {
    handleError(e as Error);
}
finally {
    console.log("Thank you for visiting!");
}

// just prints a welcome message...dooo do do do do. dodo do do dodododoo...
function heading (): void {
    console.log(`.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.`);
    console.log("----------------WELCOME TO ROSEBUD, A SIMS STORE-----------------------");
    console.log(`.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.,;:'"':;,.`);
    console.log("");
    console.log("Here is our product catalog:")
    console.log("_______________________________________________________________________");
};
