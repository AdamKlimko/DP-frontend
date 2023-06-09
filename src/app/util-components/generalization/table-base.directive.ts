import {Directive, EventEmitter, Input, Output} from '@angular/core';

export interface TableOptionsBase {
  edit: boolean;
  remove: boolean;
}

@Directive()
export abstract class TableBaseDirective<T> {
  @Input() dataSource: T[] = [];
  @Input() displayedColumns = [];
  @Input() tableOptions: TableOptionsBase;
  @Output() editEmitter = new EventEmitter<T>();
  @Output() deleteEmitter = new EventEmitter<string>();

  protected constructor() { }

  edit(item: T) {
    this.editEmitter.emit(item);
  }

  delete(id: string) {
    this.deleteEmitter.emit(id);
  }
}
