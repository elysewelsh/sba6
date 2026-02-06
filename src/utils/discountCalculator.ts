// Create a calculateDiscount() function to handle discount calculations for products.
// This function should return the dollar amount that a product is discounted by. For example, 
// if a product costs $100 and has a 10% discount, the function should return $10.

// INPUTS: Product
// OUTPUTS: Product

import { Product } from "../models/Product.js"

export function calculateDiscount(product: Product): number {
    let discountPrice: number = product.workablePrice;
    if (product.workableDiscount > 0) {
        discountPrice = (product.workablePrice * (product.workableDiscount/100));
    };
    return discountPrice;
}