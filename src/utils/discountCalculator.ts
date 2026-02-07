// Create a calculateDiscount() function to handle discount calculations for products.
// This function should return the dollar amount that a product is discounted by. For example, 
// if a product costs $100 and has a 10% discount, the function should return $10.

import { Product } from "../models/Product.js"

// price and discount were private when this was written, but circumstances 
// required they be changed to public. This function and the variables and functions
// referenced from the Product class can still accomodate a private property
export function calculateDiscount(product: Product): number {
    let discountPrice: number = product.workablePrice;
    if (product.workableDiscount > 0) {
        discountPrice = (product.workablePrice * (product.workableDiscount/100));
    };
    return discountPrice;
}