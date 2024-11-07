import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPartTableComponent } from './data-part-table.component';

describe('DataPartTableComponent', () => {
  let component: DataPartTableComponent;
  let fixture: ComponentFixture<DataPartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataPartTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DataPartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
