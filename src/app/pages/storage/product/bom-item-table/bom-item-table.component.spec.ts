import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomItemTableComponent } from './bom-item-table.component';

describe('BomItemTableComponent', () => {
  let component: BomItemTableComponent;
  let fixture: ComponentFixture<BomItemTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomItemTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BomItemTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
