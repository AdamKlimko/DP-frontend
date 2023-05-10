import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-manufacturing-card',
  templateUrl: './manufacturing-card.component.html',
  styleUrls: ['./manufacturing-card.component.scss'],
})
export class ManufacturingCardComponent {
  @Input() summary;
  @Input() chart;
  revealed = false;

  constructor() { }

  toggleView() {
    this.revealed = !this.revealed;
  }
}
