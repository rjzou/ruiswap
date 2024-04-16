/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderEntity } from './OrderEntity';
import type { RequestId } from './RequestId';
export type GetOrdersResponse = {
    requestId?: RequestId;
    orders?: Array<OrderEntity>;
    cursor?: string;
};

