/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormaAfterEventComponent } from './formaafterevent.component';

describe('FormaAfterEventComponent', () => {
  let component: FormaAfterEventComponent;
  let fixture: ComponentFixture<FormaAfterEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaAfterEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaAfterEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
