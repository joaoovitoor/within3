export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  zippoInfo?: Maybe<ZippoInfo>;
};


export type QueryZippoInfoArgs = {
  countryCode: Scalars['String'];
  postalCode: Scalars['String'];
};

export type ZippoInfo = {
  __typename?: 'ZippoInfo';
  country?: Maybe<Scalars['String']>;
  countryAbbreviation?: Maybe<Scalars['String']>;
  places?: Maybe<Array<Maybe<ZippoUsPlace>>>;
  postCode?: Maybe<Scalars['String']>;
};

export type ZippoUsPlace = {
  __typename?: 'ZippoUsPlace';
  latitude?: Maybe<Scalars['String']>;
  longitude?: Maybe<Scalars['String']>;
  placeName?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  stateAbbreviation?: Maybe<Scalars['String']>;
};
