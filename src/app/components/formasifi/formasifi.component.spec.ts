/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormaSifiComponent } from './formasifi.component';

describe('FormaSifiComponent', () => {
  let component: FormaSifiComponent;
  let fixture: ComponentFixture<FormaSifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaSifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaSifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
