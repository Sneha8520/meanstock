import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AemployeeProfileComponent } from './aemployee-profile.component';

describe('AemployeeProfileComponent', () => {
  let component: AemployeeProfileComponent;
  let fixture: ComponentFixture<AemployeeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AemployeeProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AemployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
