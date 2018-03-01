/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormaGalerijaComponent } from './formagalerija.component';

describe('FormaGalerijaComponent', () => {
  let component: FormaGalerijaComponent;
  let fixture: ComponentFixture<FormaGalerijaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormaGalerijaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaGalerijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
