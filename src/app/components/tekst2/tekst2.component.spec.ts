/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tekst2Component } from './tekst2.component';

describe('Tekst2Component', () => {
  let component: Tekst2Component;
  let fixture: ComponentFixture<Tekst2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tekst2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tekst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
