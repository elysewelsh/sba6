// Define a Product class that includes the appropriate properties based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.

import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
import { DataError, handleError} from '../utils/errorHandler.js'

// shared between Product class and API results
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

// will be called in main.ts
    displayDetails(): void {
        try {
// will format data into text for catalog output
            console.log(`${this.title} costs $${this.price}.`);
// type guards
            if (typeof this !== "undefined") {
                if (typeof this.discountPercentage !== "undefined") {
                    if (this.discountPercentage > 0) {
                        console.log(`This item is reduced by ${this.discountPercentage}% and now costs $${(this.discountedPrice).toFixed(2)}`);
                    } else {
                        console.log("");
                    }
                } else {
                throw (new DataError('Product discount type is undefined'));
                }
            } else {
                throw (new DataError('Product type is undefined'));
            }
            console.log(`The final price of ${this.title} with tax is $${(this.taxedAmount)?.toFixed(2)}.`);
        }
        catch(e) {
            handleError(e as Error);
        }
        finally {
            console.log("_______________________________________________________________________");
            console.log("");
        }
    };

// public to be used outside of this class/module
    public get workablePrice(): number {
        return this.price;
    }

    public get workableDiscount(): number {
        return this.discountPercentage;
    }

    public get workableCategory(): string {
        return `${this.category}`;
    }

// private because only used within this class/module
    private getDiscountedPrice(): number {
        return this.workablePrice - calculateDiscount(this);
    }; 

    private getPriceWithTax(): number {
        return this.discountedPrice + calculateTax(this);
    };

// public so functions can retrieve from this class/module
    public get discountedPrice(): number {
        return this.getDiscountedPrice();
    };

    public get taxedAmount(): number {
        return this.getPriceWithTax();
    }
}