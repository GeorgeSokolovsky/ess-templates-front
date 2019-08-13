import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TemplatesListComponent} from './list/templates-list.component';

const routes: Routes = [
    {
        path: 'all',
        component: TemplatesListComponent
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
export class TemplatesRoutingModule {}
