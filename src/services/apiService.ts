// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.

import { Iproduct } from '../models/Product.js'
import { APIError, DataError, handleError} from '../utils/errorHandler.js'

type productResult = {
    products: []
};

export async function handleRequest() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=30&skip=5&select=id,title,category,price,discountPercentage`); // returns a promise
        if (response.status === 200 || response.status === 304) {
            const replyObject: productResult = await response.json();
            if (typeof replyObject !== "undefined") {
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
