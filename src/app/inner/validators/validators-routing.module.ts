import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ValidatorsListComponent} from './list/validators-list.component';

const routes: Routes = [
    {
        path: 'all',
        component: ValidatorsListComponent
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
export class ValidatorsRoutingModule {}
