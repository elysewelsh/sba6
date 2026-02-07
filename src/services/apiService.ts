// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.

import { Iproduct } from '../models/Product.js'
import { APIError, DataError, handleError} from '../utils/errorHandler.js'

// the format that the queried API call returns
type productResult = {
    products: []
};

// will be called in main.ts
export async function handleRequest() {
    try {
// wait for API call to return information
// feel free to adjust limit and skip to alter catalog
        const response = await fetch(`https://dummyjson.com/products?limit=30&skip=5&select=id,title,category,price,discountPercentage`); // returns a promise
// if API call is successful...
        if (response.status === 200 || response.status === 304) {
// when API call returns information, create a workable variable
            const replyObject: productResult = await response.json();
// type guard
            if (typeof replyObject !== "undefined") {
// grab array of API results for use
                const productArray: Iproduct[] = replyObject!.products
                return productArray;
            } else {
                throw (new DataError(`API returned undefined value`));
            };
        } else {
            throw new APIError(`API call was unsuccessful`);
        }
    } catch(e) {
        handleError(e as Error);
    }
}
