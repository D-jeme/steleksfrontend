/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminComponent } from './superadmin.component';

describe('SuperAdminComponent', () => {
  let component: SuperAdminComponent;
  let fixture: ComponentFixture<SuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
