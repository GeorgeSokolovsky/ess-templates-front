import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'serialize'
})
export class SerializePipe<T extends object> implements PipeTransform {
    transform(list: T[], field: string): string {
        return list.map(item => item[field]).join(' ');
    }
}
