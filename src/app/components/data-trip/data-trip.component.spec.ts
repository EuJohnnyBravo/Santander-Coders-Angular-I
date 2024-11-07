import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTripComponent } from './data-trip.component';

describe('DataTripComponent', () => {
  let component: DataTripComponent;
  let fixture: ComponentFixture<DataTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataTripComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
