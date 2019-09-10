import {IValidator} from './validator.model';

export type Participants = IParticipant[];

export interface IParticipant {
    name: string;
    role: string;
    validators: IValidator[];
}
