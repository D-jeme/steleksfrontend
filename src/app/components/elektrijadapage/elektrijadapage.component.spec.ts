/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ElektrijadapageComponent } from './elektrijadapage.component';

describe('ElektrijadapageComponent', () => {
  let component: ElektrijadapageComponent;
  let fixture: ComponentFixture<ElektrijadapageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElektrijadapageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElektrijadapageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
