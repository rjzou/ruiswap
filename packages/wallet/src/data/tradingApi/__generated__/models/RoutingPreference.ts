/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The routing preference determines which protocol to use for the swap. If the routing preference is `UNISWAPX`, then the swap will be routed through the UniswapX Dutch Auction Protocol. If the routing preference is `CLASSIC`, then the swap will be routed through the Classic Protocol. If the routing preference is `BEST_PRICE`, then the swap will be routed through the protocol that provides the best price.
 */
export enum RoutingPreference {
    CLASSIC = 'CLASSIC',
    UNISWAPX = 'UNISWAPX',
    BEST_PRICE = 'BEST_PRICE',
}
