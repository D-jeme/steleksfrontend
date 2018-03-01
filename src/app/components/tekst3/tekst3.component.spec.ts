/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Tekst3Component } from './tekst3.component';

describe('Tekst3Component', () => {
  let component: Tekst3Component;
  let fixture: ComponentFixture<Tekst3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tekst3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tekst3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
