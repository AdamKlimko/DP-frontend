import { NgModule } from '@angular/core';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {NbAutocompleteModule, NbInputModule} from '@nebular/theme';
import {AsyncPipe, NgForOf} from '@angular/common';


@NgModule({
  imports: [
    NbAutocompleteModule,
    AsyncPipe,
    NgForOf,
    NbInputModule,
  ],
  declarations: [
    AutocompleteComponent,
  ],
  exports: [
    AutocompleteComponent,
  ],
})
export class UtilComponentsModule { }
