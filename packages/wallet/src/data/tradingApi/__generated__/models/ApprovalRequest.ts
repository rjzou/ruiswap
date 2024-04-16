/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { ChainId } from './ChainId';
import type { TokenAmount } from './TokenAmount';
import type { Urgency } from './Urgency';
export type ApprovalRequest = {
    walletAddress: Address;
    token: Address;
    amount: TokenAmount;
    chainId: ChainId;
    urgency?: Urgency;
    includeGasInfo?: boolean;
    /**
     * relevant for if we go from a wrapped token to a native token (unwrapping)
     */
    tokenOut?: string;
    /**
     * relevant for if we go from a wrapped token to a native token (unwrapping)
     */
    tokenOutChainId?: ApprovalRequest.tokenOutChainId;
};
export namespace ApprovalRequest {
    /**
     * relevant for if we go from a wrapped token to a native token (unwrapping)
     */
    export enum tokenOutChainId {
        '_1' = 1,
        '_10' = 10,
        '_56' = 56,
        '_137' = 137,
        '_8453' = 8453,
        '_42161' = 42161,
    }
}

