import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {MatButtonModule, MatToolbarModule} from '@angular/material';
import {AuthToolbarComponent} from './auth-toolbar.component';

@NgModule({
    imports: [CommonModule, MatToolbarModule, RouterModule, MatButtonModule],
    declarations: [AuthToolbarComponent],
    exports: [AuthToolbarComponent]
})
export class AuthToolbarModule {}
