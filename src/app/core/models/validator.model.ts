import {ID} from './id.model';

export type Validators = IValidator[];

export interface IValidator {
    _id: ID;
    rule: string;
    payload?: object | string | number;
    createdBy: string;
    createdAt: string;
    updatedBy: string;
    updatedAt: string;
}
