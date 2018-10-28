import { Map } from './coreTypes';
export type Maps = {
  maps: Map[];
};

export type MapPaths = {
  paths: string[];
};
export type AccountId = string;

export type DeleteRequestBody = MapPaths & {
  accountId: AccountId;
};
