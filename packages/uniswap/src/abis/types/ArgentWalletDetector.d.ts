/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { EventFragment, FunctionFragment, Result } from "@ethersproject/abi";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import {
  BaseContract,
  BigNumber,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  ethers,
} from "ethers";
import type { TypedEvent, TypedEventFilter, TypedListener } from "./common";

interface ArgentWalletDetectorInterface extends ethers.utils.Interface {
  functions: {
    "acceptedCodes(bytes32)": FunctionFragment;
    "acceptedImplementations(address)": FunctionFragment;
    "addCode(bytes32)": FunctionFragment;
    "addCodeAndImplementationFromWallet(address)": FunctionFragment;
    "addImplementation(address)": FunctionFragment;
    "changeOwner(address)": FunctionFragment;
    "getCodes()": FunctionFragment;
    "getImplementations()": FunctionFragment;
    "isArgentWallet(address)": FunctionFragment;
    "owner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedCodes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "acceptedImplementations",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "addCode", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "addCodeAndImplementationFromWallet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "addImplementation",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "changeOwner", values: [string]): string;
  encodeFunctionData(functionFragment: "getCodes", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getImplementations",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isArgentWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptedCodes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptedImplementations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addCode", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addCodeAndImplementationFromWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addImplementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCodes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getImplementations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isArgentWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {
    "CodeAdded(bytes32)": EventFragment;
    "ImplementationAdded(address)": EventFragment;
    "OwnerChanged(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CodeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ImplementationAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
}

export type CodeAddedEvent = TypedEvent<[string] & { code: string }>;

export type ImplementationAddedEvent = TypedEvent<
  [string] & { implementation: string }
>;

export type OwnerChangedEvent = TypedEvent<[string] & { _newOwner: string }>;

export class ArgentWalletDetector extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ArgentWalletDetectorInterface;

  functions: {
    acceptedCodes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

    acceptedImplementations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

    addCode(
      _code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addCodeAndImplementationFromWallet(
      _argentWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    changeOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCodes(overrides?: CallOverrides): Promise<[string[]]>;

    getImplementations(overrides?: CallOverrides): Promise<[string[]]>;

    isArgentWallet(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  acceptedCodes(
    arg0: BytesLike,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

  acceptedImplementations(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

  addCode(
    _code: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addCodeAndImplementationFromWallet(
    _argentWallet: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addImplementation(
    _impl: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  changeOwner(
    _newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCodes(overrides?: CallOverrides): Promise<string[]>;

  getImplementations(overrides?: CallOverrides): Promise<string[]>;

  isArgentWallet(_wallet: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    acceptedCodes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

    acceptedImplementations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber] & { exists: boolean; index: BigNumber }>;

    addCode(_code: BytesLike, overrides?: CallOverrides): Promise<void>;

    addCodeAndImplementationFromWallet(
      _argentWallet: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addImplementation(_impl: string, overrides?: CallOverrides): Promise<void>;

    changeOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;

    getCodes(overrides?: CallOverrides): Promise<string[]>;

    getImplementations(overrides?: CallOverrides): Promise<string[]>;

    isArgentWallet(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CodeAdded(bytes32)"(
      code?: BytesLike | null
    ): TypedEventFilter<[string], { code: string }>;

    CodeAdded(
      code?: BytesLike | null
    ): TypedEventFilter<[string], { code: string }>;

    "ImplementationAdded(address)"(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    ImplementationAdded(
      implementation?: string | null
    ): TypedEventFilter<[string], { implementation: string }>;

    "OwnerChanged(address)"(
      _newOwner?: string | null
    ): TypedEventFilter<[string], { _newOwner: string }>;

    OwnerChanged(
      _newOwner?: string | null
    ): TypedEventFilter<[string], { _newOwner: string }>;
  };

  estimateGas: {
    acceptedCodes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    acceptedImplementations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    addCode(
      _code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addCodeAndImplementationFromWallet(
      _argentWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    changeOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCodes(overrides?: CallOverrides): Promise<BigNumber>;

    getImplementations(overrides?: CallOverrides): Promise<BigNumber>;

    isArgentWallet(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedCodes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    acceptedImplementations(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    addCode(
      _code: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addCodeAndImplementationFromWallet(
      _argentWallet: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addImplementation(
      _impl: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    changeOwner(
      _newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCodes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getImplementations(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isArgentWallet(
      _wallet: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
