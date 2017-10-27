/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SIFIpageComponent } from './sifipage.component';

describe('SIFIpageComponent', () => {
  let component: SIFIpageComponent;
  let fixture: ComponentFixture<SIFIpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SIFIpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SIFIpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
