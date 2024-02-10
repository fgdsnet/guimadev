import { ProductCategory } from "./product-category";

/**
 * Represents an item included in an invoice order.
 */
export interface OrderItem {
    productID: number;                  // The unique identifier for the product.
    productName: string;                // The name of the product.
    productCategory: ProductCategory;   // The category of the product.
    quantity: number;                   // The quantity of the product ordered.
    unitPrice: number;                  // The unit price of the product.
}
