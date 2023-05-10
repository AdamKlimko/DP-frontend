import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesSummaryComponent } from './states-summary.component';

describe('StatesSummaryComponent', () => {
  let component: StatesSummaryComponent;
  let fixture: ComponentFixture<StatesSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
