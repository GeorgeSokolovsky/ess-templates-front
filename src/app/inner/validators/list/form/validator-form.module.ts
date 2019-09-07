import {NgModule} from '@angular/core';
import {ValidatorFormComponent} from './validator-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule],
    declarations: [ValidatorFormComponent],
    entryComponents: [ValidatorFormComponent]
})
export class ValidatorFormModule {}
