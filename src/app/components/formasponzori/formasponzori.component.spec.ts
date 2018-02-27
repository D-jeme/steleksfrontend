/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormaSponzoriComponent } from './formasponzori.component';

describe('FormaSponzoriComponent', () => {
  let component: FormaSponzoriComponent;
  let fixture: ComponentFixture<FormaSponzoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaSponzoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaSponzoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
