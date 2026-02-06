// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.


// INPUTS: Internet, Error
// OUTPUTS: Product
import { Iproduct } from '../models/Product.js'

type productresult = {
    products: []
};

export async function handleRequest() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=10&select=id,title,category,price,discountPercentage`); // returns a promise
        const replyObject: productresult = await response.json();
        if (typeof replyObject !== "undefined") {
        // return replyObject;
        const productArray: Iproduct[] = replyObject!.products
        // console.log(replyObject.products);
        return productArray;
        } else {
            return undefined;
        };
    } catch(e) {
        console.log(e);
        return undefined;
    }
}
