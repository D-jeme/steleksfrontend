/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UpravniodborComponent } from './upravniodbor.component';

describe('UpravniodborComponent', () => {
  let component: UpravniodborComponent;
  let fixture: ComponentFixture<UpravniodborComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpravniodborComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpravniodborComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
