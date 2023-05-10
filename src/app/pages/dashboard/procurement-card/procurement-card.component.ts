import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-procurement-card',
  templateUrl: './procurement-card.component.html',
  styleUrls: ['./procurement-card.component.scss'],
})
export class ProcurementCardComponent {
  @Input() summary;
  @Input() chartOrders;
  @Input() chartRequisitions;
  revealed = false;

  constructor() { }

  toggleView() {
    this.revealed = !this.revealed;
  }
}
