import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {participantsListQuery} from './list/gql/participants-list.query';
import {Participants} from '../../core/models/participant';

@Injectable({providedIn: 'root'})
export class ParticipantsService {
    constructor(private readonly apollo: Apollo) {}

    list(): Observable<ApolloQueryResult<{participants: Participants}>> {
        return this.apollo.watchQuery<{participants: Participants}>({
            query: participantsListQuery
        }).valueChanges;
    }
}
