import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripFormsComponent } from './trip-forms.component';

describe('TripFormsComponent', () => {
  let component: TripFormsComponent;
  let fixture: ComponentFixture<TripFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TripFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TripFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
