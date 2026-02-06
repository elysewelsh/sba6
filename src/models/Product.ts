// Define a Product class that includes the appropriate properties based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

// INPUTS: API, Discount
// OUTPUTS: Discount, Main

import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

export interface Iproduct {
    id: number,
    title: string,
    category: string,
    price: number,
    discountPercentage: number
};

export class Product implements Iproduct {
    constructor(
        public id: number,
        public title: string,
        private price: number,
        public discountPercentage: number,
        public category: string) {}

    displayDetails(): string {
        return  `${this.title} costs $${this.price} and`
    }

    public get workablePrice(): number {
        return this.price;
    }

    public get workableDiscount(): number {
        return this.discountPercentage;
    }

    public get workableCategory(): string {
        return `${this.category}`;
    }

    private getDiscountedPrice(): number {
        return this.workablePrice - calculateDiscount(this);
    }; 

    private getPriceWithTax(): number {
        return this.workablePrice + calculateTax(this);
    };

    public get discountedPrice(): number {
        return this.getDiscountedPrice();
    };

    public get taxedAmount(): number {
        return this.getPriceWithTax();
    }
}