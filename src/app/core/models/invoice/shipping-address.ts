/**
 * Represents the shipping address for an invoice order.
 */
export interface ShippingAddress {
    line: string;                       // The address line.
    city: string;                       // The city of the address.
    state: string;                      // The state or province of the address.
    postalCode: string;                 // The postal code of the address.
    country: string;                    // The country of the address.
}
