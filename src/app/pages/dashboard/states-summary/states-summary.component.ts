import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-states-summary',
  templateUrl: './states-summary.component.html',
  styleUrls: ['./states-summary.component.scss'],
})
export class StatesSummaryComponent  {
  @Input() states;
  @Input() title: string;
  constructor() { }
}
