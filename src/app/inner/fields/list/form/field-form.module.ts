import {NgModule} from '@angular/core';
import {FieldFormComponent} from './field-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [ReactiveFormsModule, MatInputModule, MatButtonModule, MatDialogModule],
    declarations: [FieldFormComponent],
    entryComponents: [FieldFormComponent]
})
export class FieldFormModule {}
