/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChainId } from './ChainId';
import type { OrderInput } from './OrderInput';
import type { OrderOutput } from './OrderOutput';
import type { OrderStatus } from './OrderStatus';
import type { OrderType } from './OrderType';
import type { SettledAmount } from './SettledAmount';
export type OrderEntity = {
    type: OrderType;
    signature: string;
    nonce: string;
    orderId: string;
    orderStatus: OrderStatus;
    chainId: ChainId;
    swapper: string;
    reactor?: string;
    startTime?: number;
    endTime?: number;
    deadline?: number;
    filler?: string;
    txHash?: string;
    input?: OrderInput;
    outputs?: Array<OrderOutput>;
    settledAmounts?: Array<SettledAmount>;
};

