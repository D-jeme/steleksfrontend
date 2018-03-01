/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Eventpreview2Component } from './eventpreview2.component';

describe('Eventpreview2Component', () => {
  let component: Eventpreview2Component;
  let fixture: ComponentFixture<Eventpreview2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventpreview2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventpreview2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
