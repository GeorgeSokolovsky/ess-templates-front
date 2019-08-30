import {ID} from './id.model';

export type Fields = IField[];

export interface IField {
    _id: ID;
    name: string;
    type: string;
    createdAt: string;
    createdBy: ID;
    updatedAt?: string;
    updatedBy?: ID;
}
