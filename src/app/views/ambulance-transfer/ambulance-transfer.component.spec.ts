import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulanceTransferComponent } from './ambulance-transfer.component';

describe('AmbulanceTransferComponent', () => {
  let component: AmbulanceTransferComponent;
  let fixture: ComponentFixture<AmbulanceTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmbulanceTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbulanceTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
