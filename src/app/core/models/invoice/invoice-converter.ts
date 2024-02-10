import { Invoice } from "./invoice";
import { Transformation as trans } from '../../Transformation';
import { TypeMap } from "./invoice-type-map";

/**
 * Converts JSON strings to/from invoice objects and asserts the results of JSON.parse at runtime.
 */
export class InvoiceConverter {
    /**
     * Converts a JSON string to an array of invoice objects.
     * @param json The JSON string to parse.
     * @returns An array of invoice objects.
     */
    public static toInvoice(json: string): Invoice[] {
        return trans.parse(TypeMap.InvoiceTypeMap, JSON.parse(json), trans.arrayOf("Invoice"));
    }

    /**
     * Converts an array of invoice objects to a JSON string.
     * @param value The array of invoice objects to stringify.
     * @returns A JSON string representing the array of invoice objects.
     */
    public static invoiceToJson(value: Invoice[]): string {
        return JSON.stringify(trans.unparse(TypeMap.InvoiceTypeMap, value, trans.arrayOf("Invoice")), null, 2);
    }
}
