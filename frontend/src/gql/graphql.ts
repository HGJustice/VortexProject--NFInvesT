/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  BigDecimal: { input: unknown; output: unknown };
  BigInt: { input: unknown; output: unknown };
  Bytes: { input: unknown; output: unknown };
  /**
   * 8 bytes signed integer
   *
   */
  Int8: { input: unknown; output: unknown };
  /**
   * A string representation of microseconds UNIX timestamp (16 digits)
   *
   */
  Timestamp: { input: unknown; output: unknown };
};

export type Aggregation_Interval = 'day' | 'hour';

export type BlockChangedFilter = {
  number_gte: Scalars['Int']['input'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']['input']>;
  number?: InputMaybe<Scalars['Int']['input']>;
  number_gte?: InputMaybe<Scalars['Int']['input']>;
};

export type BusinessCreated = {
  anualReports: Scalars['String']['output'];
  bankAccountNumber: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  businessWebsite: Scalars['String']['output'];
  financialDocuments: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  proofOfAddress: Scalars['String']['output'];
  registrationDocuments: Scalars['String']['output'];
  taxIDNumber: Scalars['String']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type BusinessCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<BusinessCreated_Filter>>>;
  anualReports?: InputMaybe<Scalars['String']['input']>;
  anualReports_contains?: InputMaybe<Scalars['String']['input']>;
  anualReports_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  anualReports_ends_with?: InputMaybe<Scalars['String']['input']>;
  anualReports_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  anualReports_gt?: InputMaybe<Scalars['String']['input']>;
  anualReports_gte?: InputMaybe<Scalars['String']['input']>;
  anualReports_in?: InputMaybe<Array<Scalars['String']['input']>>;
  anualReports_lt?: InputMaybe<Scalars['String']['input']>;
  anualReports_lte?: InputMaybe<Scalars['String']['input']>;
  anualReports_not?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_contains?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  anualReports_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  anualReports_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  anualReports_starts_with?: InputMaybe<Scalars['String']['input']>;
  anualReports_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  bankAccountNumber?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  bankAccountNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  bankAccountNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  businessWebsite?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_contains?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_ends_with?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_gt?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_gte?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_in?: InputMaybe<Array<Scalars['String']['input']>>;
  businessWebsite_lt?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_lte?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_contains?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  businessWebsite_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  businessWebsite_starts_with?: InputMaybe<Scalars['String']['input']>;
  businessWebsite_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  financialDocuments?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_contains?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_ends_with?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_gt?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_gte?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_in?: InputMaybe<Array<Scalars['String']['input']>>;
  financialDocuments_lt?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_lte?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_not?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_not_contains?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  financialDocuments_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  financialDocuments_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  financialDocuments_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  financialDocuments_starts_with?: InputMaybe<Scalars['String']['input']>;
  financialDocuments_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<BusinessCreated_Filter>>>;
  proofOfAddress?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_contains?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_ends_with?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_gt?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_gte?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proofOfAddress_lt?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_lte?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  proofOfAddress_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  proofOfAddress_starts_with?: InputMaybe<Scalars['String']['input']>;
  proofOfAddress_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_contains?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_ends_with?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_gt?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_gte?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registrationDocuments_lt?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_lte?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_not?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_not_contains?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_not_contains_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_not_ends_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  registrationDocuments_not_starts_with?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_not_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  registrationDocuments_starts_with?: InputMaybe<Scalars['String']['input']>;
  registrationDocuments_starts_with_nocase?: InputMaybe<
    Scalars['String']['input']
  >;
  taxIDNumber?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_contains?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_ends_with?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_gt?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_gte?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taxIDNumber_lt?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_lte?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_contains?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_contains_nocase?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_ends_with?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_ends_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  taxIDNumber_not_starts_with?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_not_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_starts_with?: InputMaybe<Scalars['String']['input']>;
  taxIDNumber_starts_with_nocase?: InputMaybe<Scalars['String']['input']>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type BusinessCreated_OrderBy =
  | 'anualReports'
  | 'bankAccountNumber'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'businessWebsite'
  | 'financialDocuments'
  | 'id'
  | 'proofOfAddress'
  | 'registrationDocuments'
  | 'taxIDNumber'
  | 'transactionHash';

export type ListingBought = {
  Marketplace_id: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  buyer: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['BigInt']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ListingBought_Filter = {
  Marketplace_id?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  Marketplace_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ListingBought_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  buyer?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_gte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  buyer_lt?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_lte?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  buyer_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ListingBought_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type ListingBought_OrderBy =
  | 'Marketplace_id'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'buyer'
  | 'id'
  | 'price'
  | 'transactionHash';

export type ListingCreated = {
  Marketplace_id: Scalars['BigInt']['output'];
  amount: Scalars['BigInt']['output'];
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  id: Scalars['ID']['output'];
  price: Scalars['BigInt']['output'];
  seller: Scalars['Bytes']['output'];
  tokenAddy: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type ListingCreated_Filter = {
  Marketplace_id?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_gt?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_gte?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  Marketplace_id_lt?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_lte?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_not?: InputMaybe<Scalars['BigInt']['input']>;
  Marketplace_id_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  amount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  amount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not?: InputMaybe<Scalars['BigInt']['input']>;
  amount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ListingCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<ListingCreated_Filter>>>;
  price?: InputMaybe<Scalars['BigInt']['input']>;
  price_gt?: InputMaybe<Scalars['BigInt']['input']>;
  price_gte?: InputMaybe<Scalars['BigInt']['input']>;
  price_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  price_lt?: InputMaybe<Scalars['BigInt']['input']>;
  price_lte?: InputMaybe<Scalars['BigInt']['input']>;
  price_not?: InputMaybe<Scalars['BigInt']['input']>;
  price_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  seller?: InputMaybe<Scalars['Bytes']['input']>;
  seller_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_gte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  seller_lt?: InputMaybe<Scalars['Bytes']['input']>;
  seller_lte?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  seller_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddy?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_gt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_gte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  tokenAddy_lt?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_lte?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_not?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  tokenAddy_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type ListingCreated_OrderBy =
  | 'Marketplace_id'
  | 'amount'
  | 'blockNumber'
  | 'blockTimestamp'
  | 'id'
  | 'price'
  | 'seller'
  | 'tokenAddy'
  | 'transactionHash';

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';

export type Query = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  businessCreated?: Maybe<BusinessCreated>;
  businessCreateds: Array<BusinessCreated>;
  listingBought?: Maybe<ListingBought>;
  listingBoughts: Array<ListingBought>;
  listingCreated?: Maybe<ListingCreated>;
  listingCreateds: Array<ListingCreated>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
};

export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type QueryBusinessCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryBusinessCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BusinessCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BusinessCreated_Filter>;
};

export type QueryListingBoughtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryListingBoughtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ListingBought_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ListingBought_Filter>;
};

export type QueryListingCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryListingCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ListingCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ListingCreated_Filter>;
};

export type QueryTokenCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type QueryTokenCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenCreated_Filter>;
};

export type Subscription = {
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  businessCreated?: Maybe<BusinessCreated>;
  businessCreateds: Array<BusinessCreated>;
  listingBought?: Maybe<ListingBought>;
  listingBoughts: Array<ListingBought>;
  listingCreated?: Maybe<ListingCreated>;
  listingCreateds: Array<ListingCreated>;
  tokenCreated?: Maybe<TokenCreated>;
  tokenCreateds: Array<TokenCreated>;
};

export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};

export type SubscriptionBusinessCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionBusinessCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<BusinessCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<BusinessCreated_Filter>;
};

export type SubscriptionListingBoughtArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionListingBoughtsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ListingBought_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ListingBought_Filter>;
};

export type SubscriptionListingCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionListingCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ListingCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ListingCreated_Filter>;
};

export type SubscriptionTokenCreatedArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID']['input'];
  subgraphError?: _SubgraphErrorPolicy_;
};

export type SubscriptionTokenCreatedsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<TokenCreated_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<TokenCreated_Filter>;
};

export type TokenCreated = {
  blockNumber: Scalars['BigInt']['output'];
  blockTimestamp: Scalars['BigInt']['output'];
  businessOwner: Scalars['Bytes']['output'];
  id: Scalars['ID']['output'];
  token: Scalars['Bytes']['output'];
  transactionHash: Scalars['Bytes']['output'];
};

export type TokenCreated_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  and?: InputMaybe<Array<InputMaybe<TokenCreated_Filter>>>;
  blockNumber?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  blockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not?: InputMaybe<Scalars['BigInt']['input']>;
  blockTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  businessOwner?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_contains?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_gt?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_gte?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  businessOwner_lt?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_lte?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_not?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  businessOwner_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_gt?: InputMaybe<Scalars['ID']['input']>;
  id_gte?: InputMaybe<Scalars['ID']['input']>;
  id_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  id_lt?: InputMaybe<Scalars['ID']['input']>;
  id_lte?: InputMaybe<Scalars['ID']['input']>;
  id_not?: InputMaybe<Scalars['ID']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']['input']>>;
  or?: InputMaybe<Array<InputMaybe<TokenCreated_Filter>>>;
  token?: InputMaybe<Scalars['Bytes']['input']>;
  token_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_gt?: InputMaybe<Scalars['Bytes']['input']>;
  token_gte?: InputMaybe<Scalars['Bytes']['input']>;
  token_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  token_lt?: InputMaybe<Scalars['Bytes']['input']>;
  token_lte?: InputMaybe<Scalars['Bytes']['input']>;
  token_not?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  token_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_gte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
  transactionHash_lt?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_lte?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_contains?: InputMaybe<Scalars['Bytes']['input']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['Bytes']['input']>>;
};

export type TokenCreated_OrderBy =
  | 'blockNumber'
  | 'blockTimestamp'
  | 'businessOwner'
  | 'id'
  | 'token'
  | 'transactionHash';

export type _Block_ = {
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']['output']>;
  /** The block number */
  number: Scalars['Int']['output'];
  /** The hash of the parent block */
  parentHash?: Maybe<Scalars['Bytes']['output']>;
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']['output']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   *
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String']['output'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean']['output'];
};

export type _SubgraphErrorPolicy_ =
  /** Data will be returned even if the subgraph has indexing errors */
  | 'allow'
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  | 'deny';

export type GetCompanyListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
  search?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetCompanyListQuery = {
  businessCreateds: Array<{
    id: string;
    registrationDocuments: string;
    taxIDNumber: string;
    proofOfAddress: string;
  }>;
};

export type GetMarketplaceListQueryVariables = Exact<{
  first: Scalars['Int']['input'];
}>;

export type GetMarketplaceListQuery = {
  listingCreateds: Array<{
    Marketplace_id: string;
    amount: string;
    price: string;
  }>;
};

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(
    private value: string,
    public __meta__?: Record<string, any>,
  ) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetCompanyListDocument = new TypedDocumentString(`
    query GetCompanyList($first: Int!, $search: String) {
  businessCreateds(
    first: $first
    where: {registrationDocuments_contains_nocase: $search}
  ) {
    id
    registrationDocuments
    taxIDNumber
    proofOfAddress
  }
}
    `) as unknown as TypedDocumentString<
  GetCompanyListQuery,
  GetCompanyListQueryVariables
>;
export const GetMarketplaceListDocument = new TypedDocumentString(`
    query GetMarketplaceList($first: Int!) {
  listingCreateds(first: $first) {
    Marketplace_id
    amount
    price
  }
}
    `) as unknown as TypedDocumentString<
  GetMarketplaceListQuery,
  GetMarketplaceListQueryVariables
>;
