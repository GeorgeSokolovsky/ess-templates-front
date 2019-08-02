import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'registration',
        loadChildren: () =>
            import('./registration/registration.module').then(
                ({RegistrationModule}) => RegistrationModule
            )
    },
    {
        path: '',
        redirectTo: 'registration',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
