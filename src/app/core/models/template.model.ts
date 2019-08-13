import {ID} from './id.model';

export interface ITemplate {
    name: string;
    createdBy: ID;
    updatedBy: ID;
    createdAt: string;
    updatedAt: string;
    fields?: ID[];
    participants?: ID[];
}

export type Templates = ITemplate[];
