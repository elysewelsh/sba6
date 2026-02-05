// Create API requests using async/await and Promises.
// Implement functions to fetch product data and handle errors using try/catch.


// INPUTS: Internet, Error
// OUTPUTS: Product, Discount
interface Iresponse {
    id: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number
};



export async function handleRequest() {
    try {
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=10&select=id,title,category,price,discountPercentage`); // returns a promise
        const replyObject: Iresponse = await response.json();
        // if (typeof replyObject !== "undefined") {
        console.log(replyObject)
        // };
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

handleRequest()