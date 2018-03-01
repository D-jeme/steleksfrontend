/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tekst4Component } from './tekst4.component';

describe('Tekst4Component', () => {
  let component: Tekst4Component;
  let fixture: ComponentFixture<Tekst4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tekst4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tekst4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
