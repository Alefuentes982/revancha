import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfnloginPage } from './afnlogin.page';

describe('AfnloginPage', () => {
  let component: AfnloginPage;
  let fixture: ComponentFixture<AfnloginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfnloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
