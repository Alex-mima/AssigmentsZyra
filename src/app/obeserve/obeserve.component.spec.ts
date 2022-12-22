import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObeserveComponent } from './obeserve.component';

describe('ObeserveComponent', () => {
  let component: ObeserveComponent;
  let fixture: ComponentFixture<ObeserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObeserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObeserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
