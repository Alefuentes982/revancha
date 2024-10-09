import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AfnlistaPage } from './afnlista.page';

describe('AfnlistaPage', () => {
  let component: AfnlistaPage;
  let fixture: ComponentFixture<AfnlistaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AfnlistaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
