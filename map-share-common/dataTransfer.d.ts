import { Map } from './coreTypes';
export declare type Maps = {
    maps: Map[];
};
export declare type MapPaths = {
    paths: string[];
};
export declare type AccountId = string;
export declare type DeleteRequestBody = MapPaths & {
    accountId: AccountId;
};
