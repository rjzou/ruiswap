/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { DutchOrderInfo } from './DutchOrderInfo';
export type DutchQuote = {
    encodedOrder: string;
    orderId: string;
    orderInfo: DutchOrderInfo;
    portionBips?: number;
    portionAmount?: string;
    portionRecipient?: Address;
    quoteId?: string;
};

