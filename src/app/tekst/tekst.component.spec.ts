/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TekstComponent } from './tekst.component';

describe('TekstComponent', () => {
  let component: TekstComponent;
  let fixture: ComponentFixture<TekstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TekstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TekstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
