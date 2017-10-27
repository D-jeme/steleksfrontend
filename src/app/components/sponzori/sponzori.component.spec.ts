/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SponzoriComponent } from './sponzori.component';

describe('SponzoriComponent', () => {
  let component: SponzoriComponent;
  let fixture: ComponentFixture<SponzoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponzoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponzoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
