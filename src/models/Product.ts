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
        public price: number,
        public discountPercentage: number,
        public category: string) {}

    displayDetails(): void {
        console.log(`${this.title} costs $${this.price}.`);
        // console.log(`workable category: ${this.workableCategory}`);
        // console.log(`workable discount: ${this.workableDiscount}`);
        // console.log(`workable getpricewithtax: ${this.getPriceWithTax()}`);
        // console.log(`workable getdiscountedprice: ${this.getDiscountedPrice()}`);
        if (typeof this !== "undefined") {
            if (typeof this.discountPercentage !== "undefined") {
                if (this.discountPercentage > 0) {
                    console.log(`This item is reduced by ${this.discountPercentage}% and now costs $${(this.discountedPrice).toFixed(2)}`)
                } else {
                    console.error("error4")
                }
            } else {
                console.error("error5")
            }
        } else {
            console.log("error6")
        }
        console.log(`The final price of ${this.title} with tax is $${(this.taxedAmount)?.toFixed(2)}.`);
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
        return this.discountedPrice + calculateTax(this);
    };

    public get discountedPrice(): number {
        return this.getDiscountedPrice();
    };

    public get taxedAmount(): number {
        return this.getPriceWithTax();
    }
}