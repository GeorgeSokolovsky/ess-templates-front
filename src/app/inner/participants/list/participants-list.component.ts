import {ChangeDetectionStrategy, Component} from '@angular/core';
import {map} from 'rxjs/operators';
import {IParticipant} from '../../../core/models/participant';
import {ParticipantsService} from '../participants.service';

@Component({
    selector: 'ess-participants-list',
    templateUrl: './participants-list.component.html',
    styleUrls: ['./participants-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParticipantsListComponent {
    participants$ = this.participantsService
        .list()
        .pipe(map(({data}) => data.participants));

    constructor(private readonly participantsService: ParticipantsService) {}

    onCreateParticipant() {
        throw new Error('Not implemented yet');
    }

    onEditParticipant(participant: IParticipant) {
        throw new Error('Not implemented yet');
    }
}
