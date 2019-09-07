import {ID} from '../../../core/models/id.model';

export interface IUpdateValidatorInput {
    _id: ID;
    rule: string;
    payload: object | string | number;
}
