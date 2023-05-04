import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiProductTabComponent } from './semi-product-tab.component';

describe('SemiProductTabComponent', () => {
  let component: SemiProductTabComponent;
  let fixture: ComponentFixture<SemiProductTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SemiProductTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SemiProductTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
