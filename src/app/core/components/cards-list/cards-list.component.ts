import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    TemplateRef
} from '@angular/core';

@Component({
    selector: 'ess-cards-list',
    templateUrl: './cards-list.component.html',
    styleUrls: ['./cards-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardsListComponent<T, H, C> {
    @Input() title: string;
    @Input() items: T[] = [];
    @Input() cardHeader: TemplateRef<H> ;
    @Input() cardContent: TemplateRef<C>;

    @Output() editItem = new EventEmitter<T>();

    onEditItem(item: T) {
        this.editItem.emit(item);
    }
}
