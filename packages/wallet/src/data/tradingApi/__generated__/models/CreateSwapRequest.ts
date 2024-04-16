/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClassicQuote } from './ClassicQuote';
import type { Permit } from './Permit';
import type { SwapSafetyMode } from './SwapSafetyMode';
/**
 * The parameters **signature** and **permitData** should only be included if *permitData* was returned from **quote**.
 */
export type CreateSwapRequest = {
    quote: ClassicQuote;
    /**
     * The signed permit.
     */
    signature?: string;
    includeGasInfo?: boolean;
    permitData?: Permit;
    safetyMode?: SwapSafetyMode;
    /**
     * The deadline for the swap in unix timestamp format. If the deadline is not defined OR in the past then the default deadline is 30 minutes.
     */
    deadline?: number;
};

