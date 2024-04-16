/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Address } from './Address';
import type { ChainId } from './ChainId';
import type { ClassicInput } from './ClassicInput';
import type { ClassicOutput } from './ClassicOutput';
import type { TradeType } from './TradeType';
import type { TransactionFailureReason } from './TransactionFailureReason';
import type { V2PoolInRoute } from './V2PoolInRoute';
import type { V3PoolInRoute } from './V3PoolInRoute';
export type ClassicQuote = {
    input?: ClassicInput;
    output?: ClassicOutput;
    swapper?: Address;
    chainId?: ChainId;
    slippage?: number;
    tradeType?: TradeType;
    /**
     * The gas fee in terms of wei.
     */
    gasFee?: string;
    /**
     * The gas fee in terms of USD.
     */
    gasFeeUSD?: string;
    /**
     * The gas fee in terms of the quoted currency.
     */
    gasFeeQuote?: string;
    route?: Array<Array<(V3PoolInRoute | V2PoolInRoute)>>;
    /**
     * The portion of the swap that will be taken as a fee. The fee will be taken from the output token.
     */
    portionBips?: number;
    /**
     * The amount of the swap that will be taken as a fee. The fee will be taken from the output token.
     */
    portionAmount?: string;
    portionRecipient?: Address;
    /**
     * The route in string format.
     */
    routeString?: string;
    /**
     * The quote id. Used for analytics purposes.
     */
    quoteId?: string;
    /**
     * The estimated gas use.
     */
    gasUseEstimate?: string;
    /**
     * The current block number.
     */
    blockNumber?: string;
    /**
     * The gas price in terms of wei for pre EIP1559 transactions.
     */
    gasPrice?: string;
    /**
     * The maximum fee per gas in terms of wei for EIP1559 transactions.
     */
    maxFeePerGas?: string;
    /**
     * The maximum priority fee per gas in terms of wei for EIP1559 transactions.
     */
    maxPriorityFeePerGas?: string;
    txFailureReasons?: Array<TransactionFailureReason>;
};

