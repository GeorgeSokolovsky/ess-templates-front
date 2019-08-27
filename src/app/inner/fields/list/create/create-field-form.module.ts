import {NgModule} from '@angular/core';
import {CreateFieldFormComponent} from './create-field-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
    imports: [ReactiveFormsModule, MatInputModule, MatButtonModule],
    declarations: [CreateFieldFormComponent],
    entryComponents: [CreateFieldFormComponent]
})
export class CreateFieldFormModule {}
