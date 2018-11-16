import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoggerComponent } from './customer-logger.component';

describe('CustomerLoggerComponent', () => {
  let component: CustomerLoggerComponent;
  let fixture: ComponentFixture<CustomerLoggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLoggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
