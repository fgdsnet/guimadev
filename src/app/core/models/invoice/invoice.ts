import { OrderItem } from "./order-item";
import { ShippingAddress } from "./shipping-address";
import { Transformation as trans } from '../../Transformation';
/**
 * Represents an invoice with details such as order ID, customer information, order items, etc.
 */
export interface Invoice {
    orderID: number;                    // The unique identifier for the order.
    orderNumber: number;                // The order number associated with the invoice.
    customerID: number;                 // The unique identifier for the customer.
    customerName: string;               // The name of the customer.
    sellerID: number;                   // The unique identifier for the seller.
    sellerName: string;                 // The name of the seller.
    orderItems: OrderItem[];            // An array of order items included in the invoice.
    shippingAddress: ShippingAddress;   // The shipping address for the order.
    loyaltyPoints: number;              // The loyalty points earned for the order.
    orderStatus?: string;               // The status of the order (optional).
    createdAt: Date;                    // The date and time when the order was created.
    updatedAt: Date;                    // The date and time when the order was last updated.
}

// Data type mappings

const typeMap: any = {
    "Invoice": trans.objectOf([
        { json: "order_id", js: "orderID", type: 0 },
        { json: "order_number", js: "orderNumber", type: 0 },
        { json: "customer_id", js: "customerID", type: 0 },
        { json: "customer_name", js: "customerName", type: "" },
        { json: "seller_id", js: "sellerID", type: 0 },
        { json: "seller_name", js: "sellerName", type: "" },
        { json: "order_items", js: "orderItems", type: trans.arrayOf(trans.reference("OrderItem")) },
        { json: "shipping_address", js: "shippingAddress", type: trans.reference("ShippingAddress") },
        { json: "loyalty_points", js: "loyaltyPoints", type: 0 },
        { json: "order_status", js: "orderStatus", type: trans.unionOf(undefined, "") },
        { json: "created_at", js: "createdAt", type: Date },
        { json: "updated_at", js: "updatedAt", type: Date },
    ], false),
    "OrderItem": trans.objectOf([
        { json: "product_id", js: "productID", type: 0 },
        { json: "product_name", js: "productName", type: "" },
        { json: "product_category", js: "productCategory", type: trans.reference("ProductCategory") },
        { json: "quantity", js: "quantity", type: 0 },
        { json: "unit_price", js: "unitPrice", type: 3.14 },
    ], false),
    "ShippingAddress": trans.objectOf([
        { json: "line", js: "line", type: "" },
        { json: "city", js: "city", type: "" },
        { json: "state", js: "state", type: "" },
        { json: "postal_code", js: "postalCode", type: "" },
        { json: "country", js: "country", type: "" },
    ], false),
    "ProductCategory": [
        "Electronics",
        "Grocery",
        "Home Appliances",
        "Power Tools",
    ],
};