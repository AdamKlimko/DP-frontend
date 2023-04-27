import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ngx-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class AutocompleteComponent implements OnInit {
  @Input() selectedValue: string;
  @Input() options: string[];
  filteredOptions$: Observable<string[]>;

  @Output() filterChanged = new EventEmitter<string>();
  @Output() valueSelected = new EventEmitter<any>();

  inputControl = new FormControl<string>('');

  ngOnInit() {
    if (this.selectedValue) {
      this.inputControl.patchValue(this.selectedValue);
      this.options = [this.selectedValue];
    }
    this.filteredOptions$ = of(this.options);
  }

  private filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
  }

  getFilteredOptions(value: string): Observable<string[]> {
    return of(value).pipe(
      map(filterString => this.filter(filterString)),
    );
  }

  onChange() {
    this.filterChanged.emit(this.inputControl.value);
    this.filteredOptions$ = this.getFilteredOptions(this.inputControl.value);
  }

  onSelectionChange($event) {
    this.filteredOptions$ = this.getFilteredOptions($event);
    this.valueSelected.emit($event);
  }
}
