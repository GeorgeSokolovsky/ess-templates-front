import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'registration',
        loadChildren: () =>
            import('./registration/registration.module').then(
                module => module.RegistrationModule
            )
    },
    {
        path: 'sign-in',
        loadChildren: () =>
            import('./sign-in/sign-in.module').then(module => module.SignInModule)
    },
    {
        path: 'templates',
        loadChildren: () =>
            import('./templates/templates.module').then(module => module.TemplatesModule)
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
