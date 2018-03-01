/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Eventpreview3Component } from './eventpreview3.component';

describe('Eventpreview3Component', () => {
  let component: Eventpreview3Component;
  let fixture: ComponentFixture<Eventpreview3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Eventpreview3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Eventpreview3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
