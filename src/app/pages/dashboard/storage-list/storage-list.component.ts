import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.scss'],
})
export class StorageListComponent {
  @Input() inputData: [{location: string, totalStored: string}];

  constructor() { }
}
