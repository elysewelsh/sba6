// Define a Product class that includes the appropriate properties based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

// INPUTS: API, Discount
// OUTPUTS: Discount, Main

import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";

export abstract class Product {
    constructor(
        public readonly id: number,
        public readonly title: string,
        private price: number,
        private discount: number,
        private category: string) {}

    displayDetails(): string {
        return  `${this.title} costs $${this.price} and`
    }

    public get workablePrice(): number {
        return this.price;
    }

    public get workableDiscount(): number {
        return this.discount;
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