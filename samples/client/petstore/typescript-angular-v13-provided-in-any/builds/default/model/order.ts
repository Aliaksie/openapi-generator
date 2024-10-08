/**
 * OpenAPI Petstore
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * An order for a pets from the pet store
 */
export interface Order { 
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /**
     * Order Status
     */
    status?: Order.StatusEnum;
    complete?: boolean;
}
export namespace Order {
    export type StatusEnum = 'placed' | 'approved' | 'delivered';
    export const StatusEnum = {
        Placed: 'placed' as StatusEnum,
        Approved: 'approved' as StatusEnum,
        Delivered: 'delivered' as StatusEnum
    };
}


