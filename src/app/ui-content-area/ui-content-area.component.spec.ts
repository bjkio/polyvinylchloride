import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiContentAreaComponent } from './ui-content-area.component';

describe('UiContentAreaComponent', () => {
  let component: UiContentAreaComponent;
  let fixture: ComponentFixture<UiContentAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiContentAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiContentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
