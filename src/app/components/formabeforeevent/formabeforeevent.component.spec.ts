/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormaBeforeEventComponent } from './formabeforeevent.component';

describe('FormaBeforeEventComponent', () => {
  let component: FormaBeforeEventComponent;
  let fixture: ComponentFixture<FormaBeforeEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaBeforeEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaBeforeEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
