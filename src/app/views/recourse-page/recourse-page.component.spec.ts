import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoursePageComponent } from './recourse-page.component';

describe('RecoursePageComponent', () => {
  let component: RecoursePageComponent;
  let fixture: ComponentFixture<RecoursePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoursePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoursePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
