/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LearningpageComponent } from './learningpage.component';

describe('LearningpageComponent', () => {
  let component: LearningpageComponent;
  let fixture: ComponentFixture<LearningpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearningpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearningpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
