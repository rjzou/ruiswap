/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuoteRequest } from '../models/QuoteRequest';
import type { QuoteResponse } from '../models/QuoteResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuoteService {
    /**
     * Get a quote
     * Get a quote according to the provided configuration. Optionally adds a fee to the quote according to the API key being used. The fee is **ALWAYS** taken from the output token. If there is a fee and the trade is `EXACT_INPUT`, then the output amount will **NOT** include the fee subtraction. For `EXACT_INPUT` swaps, use `portionBips` to calculate the fee from the quoted amount. If there is a fee and the trade is `EXACT_OUTPUT`, then the input amount will **NOT** include the fee addition to account for the fee. For `EXACT_OUTPUT` swaps, use `portionAmount` to get the fee.
     * @returns QuoteResponse Quote request successful.
     * @throws ApiError
     */
    public static aggregatorQuote({
        requestBody,
    }: {
        requestBody?: QuoteRequest,
    }): CancelablePromise<QuoteResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/quote',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
