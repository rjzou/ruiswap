/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateSwapRequest } from '../models/CreateSwapRequest';
import type { CreateSwapResponse } from '../models/CreateSwapResponse';
import type { GetSwapResponse } from '../models/GetSwapResponse';
import type { TransactionHash } from '../models/TransactionHash';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SwapService {
    /**
     * Create swap calldata
     * Create the calldata for a swap transaction against the Uniswap Protocols. If the `quote` parameter includes the fee parameters, then the calldata will include the fee disbursement. The gas estimates will be **more precise** when the the response calldata would be valid if submitted on-chain.
     * @returns CreateSwapResponse Create swap successful.
     * @throws ApiError
     */
    public static createSwapTransaction({
        requestBody,
    }: {
        requestBody?: CreateSwapRequest,
    }): CancelablePromise<CreateSwapResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/swap',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get swap status
     * Get the status of a swap transaction.
     * @returns GetSwapResponse Get swap successful.
     * @throws ApiError
     */
    public static getSwapTransaction({
        txHash,
    }: {
        /**
         * The transaction has.
         */
        txHash: TransactionHash,
    }): CancelablePromise<GetSwapResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/swap/{txHash}',
            path: {
                'txHash': txHash,
            },
            errors: {
                404: `The order was not found.`,
            },
        });
    }
}
