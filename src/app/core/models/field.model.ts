import {ID} from './id.model';

export type Fields = IField[];

export interface IField {
    name: string;
    type: string;
    createdAt: string;
    createdBy: ID;
    updatedAt?: string;
    updatedBy?: ID;
}
