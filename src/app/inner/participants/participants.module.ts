import {NgModule} from '@angular/core';
import {ParticipantsRoutingModule} from './participants-routing.module';
import {ParticipantsListModule} from './list/participants-list.module';

@NgModule({
    imports: [ParticipantsListModule, ParticipantsRoutingModule]
})
export class ParticipantsModule {}
