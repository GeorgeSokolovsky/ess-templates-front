import {NgModule} from '@angular/core';

import {SerializePipe} from './serialize.pipe';

@NgModule({
    exports: [SerializePipe],
    declarations: [SerializePipe]
})
export class SerializeModule {}
