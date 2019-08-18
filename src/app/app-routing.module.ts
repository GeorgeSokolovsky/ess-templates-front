import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './core/guards/auth.guard';

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
        path: 'inner',
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'templates',
                loadChildren: () =>
                    import('./inner/templates/templates.module').then(
                        module => module.TemplatesModule
                    )
            }
        ]
    },
    {
        path: '',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
