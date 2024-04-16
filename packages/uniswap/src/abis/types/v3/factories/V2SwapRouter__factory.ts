/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";
import type { V2SwapRouter, V2SwapRouterInterface } from "../V2SwapRouter";

const _abi = [
  {
    inputs: [],
    name: "FromAddressIsNotOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientETH",
    type: "error",
  },
  {
    inputs: [],
    name: "InsufficientToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBips",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSpender",
    type: "error",
  },
  {
    inputs: [],
    name: "V2InvalidPath",
    type: "error",
  },
  {
    inputs: [],
    name: "V2TooLittleReceived",
    type: "error",
  },
  {
    inputs: [],
    name: "V2TooMuchRequested",
    type: "error",
  },
];

export class V2SwapRouter__factory {
  static readonly abi = _abi;
  static createInterface(): V2SwapRouterInterface {
    return new utils.Interface(_abi) as V2SwapRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): V2SwapRouter {
    return new Contract(address, _abi, signerOrProvider) as V2SwapRouter;
  }
}
