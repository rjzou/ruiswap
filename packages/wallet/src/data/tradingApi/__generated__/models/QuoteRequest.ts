/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { ChainId } from './ChainId';
import type { RoutingPreference } from './RoutingPreference';
import type { TradeType } from './TradeType';
export type QuoteRequest = {
    type: TradeType;
    amount: string;
    tokenInChainId: ChainId;
    tokenOutChainId: ChainId;
    tokenIn: string;
    tokenOut: string;
    swapper: Address;
    /**
     * The slippage tolerance is a percentage represented as a percentage. For **Classic** swaps, the slippage tolerance is the maximum amount the price can change between the time the transaction is submitted and the time it is executed. For **DutchLimit** swaps, the slippage tolerance determines how much the `endAmount` can decay from the `startAmount`.
     */
    slippageTolerance?: number;
    routingPreference?: RoutingPreference;
};

