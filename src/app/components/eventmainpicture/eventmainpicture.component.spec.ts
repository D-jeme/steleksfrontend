/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EventmainpictureComponent } from './eventmainpicture.component';

describe('LearningpageComponent', () => {
  let component: EventmainpictureComponent;
  let fixture: ComponentFixture<EventmainpictureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventmainpictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventmainpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
