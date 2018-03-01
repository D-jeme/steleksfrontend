/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Eventpreview4Component } from './eventpreview4.component';

describe('Eventpreview4Component', () => {
  let component: Eventpreview4Component;
  let fixture: ComponentFixture<Eventpreview4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventpreview4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventpreview4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
