import {Component, Input, OnInit} from '@angular/core';
import {NbDialogRef, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'ngx-customer-order-dialog',
  templateUrl: './customer-order-dialog.component.html',
  styleUrls: ['./customer-order-dialog.component.scss'],
})
export class CustomerOrderDialogComponent implements OnInit {

  @Input() title: string;
  constructor(
    protected ref: NbDialogRef<CustomerOrderDialogComponent>,
    private toastrService: NbToastrService,
  ) {}

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  showToast(status) {
    this.toastrService.show(status, `Toast`, { status });
  }
}
