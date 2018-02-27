/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SuperAdminOpcijeComponent } from './superadminopcije.component';

describe('SuperAdminOpcijeComponent', () => {
  let component: SuperAdminOpcijeComponent;
  let fixture: ComponentFixture<SuperAdminOpcijeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminOpcijeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminOpcijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
