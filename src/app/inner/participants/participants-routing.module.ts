import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ParticipantsListComponent} from './list/participants-list.component';

const routes: Routes = [
    {
        path: 'all',
        component: ParticipantsListComponent
    },
    {
        path: '**',
        redirectTo: 'all',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ParticipantsRoutingModule {}
