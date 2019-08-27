import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FieldsListComponent} from './list/fields-list.component';

const routes: Routes = [
    {
        path: 'all',
        component: FieldsListComponent
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
export class FieldsRoutingModule {}
