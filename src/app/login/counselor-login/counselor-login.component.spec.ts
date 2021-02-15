import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorLoginComponent } from './counselor-login.component';

describe('CounselorLoginComponent', () => {
  let component: CounselorLoginComponent;
  let fixture: ComponentFixture<CounselorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
