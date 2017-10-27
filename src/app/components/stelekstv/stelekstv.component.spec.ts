/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StelekstvComponent } from './stelekstv.component';

describe('StelekstvComponent', () => {
  let component: StelekstvComponent;
  let fixture: ComponentFixture<StelekstvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StelekstvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StelekstvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
