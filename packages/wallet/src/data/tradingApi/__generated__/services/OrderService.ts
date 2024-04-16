/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from '../models/Address';
import type { GetOrdersResponse } from '../models/GetOrdersResponse';
import type { OrderId } from '../models/OrderId';
import type { OrderRequest } from '../models/OrderRequest';
import type { OrderResponse } from '../models/OrderResponse';
import type { OrderStatus } from '../models/OrderStatus';
import type { SortKey } from '../models/SortKey';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderService {
    /**
     * Create a gasless order
     * Submits a new gasless encoded order. The order will be validated and if valid, will be submitted to the filler network. The network will try to fill the order at the quoted `startAmount`, and if not, the amount will start decaying until the `endAmount` is reached. While the order is within `decayEndTime`, the `orderStatus` is `open`. If the order does not get filled after the `decayEndTime` has passed, that is reflected in the `expired` `orderStatus`. then  The order will be filled at the best price possible. Once the order is filled, `orderStatus` becomes `filled`.
     * @returns OrderResponse Encoded order submitted.
     * @throws ApiError
     */
    public static postDutchOrder({
        requestBody,
    }: {
        requestBody?: OrderRequest,
    }): CancelablePromise<OrderResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/order',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Invalid Order.`,
            },
        });
    }
    /**
     * Get gasless orders
     * Retrieve gasless orders filtered by query param(s). Some fields on the order can be used as query param.
     * @returns GetOrdersResponse Order submitted.
     * @throws ApiError
     */
    public static getDutchOrder({
        orderId,
        limit,
        orderStatus,
        swapper,
        sortKey,
        sort,
        filler,
        cursor,
    }: {
        orderId?: OrderId,
        limit?: number,
        /**
         * Filter by order status.
         */
        orderStatus?: OrderStatus,
        /**
         * Filter by swapper address.
         */
        swapper?: Address,
        /**
         * Order the query results by the sort key.
         */
        sortKey?: SortKey,
        /**
         * Sort query. For example: `sort=gt(UNIX_TIMESTAMP)`, `sort=between(1675872827, 1675872930)`, or `lt(1675872930)`.
         */
        sort?: string,
        /**
         * Filter by filler address.
         */
        filler?: Address,
        cursor?: string,
    }): CancelablePromise<GetOrdersResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders',
            query: {
                'orderId': orderId,
                'limit': limit,
                'orderStatus': orderStatus,
                'swapper': swapper,
                'sortKey': sortKey,
                'sort': sort,
                'filler': filler,
                'cursor': cursor,
            },
            errors: {
                404: `The order was not found.`,
            },
        });
    }
}
