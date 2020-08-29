import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSidebarComponent } from './ui-sidebar.component';

describe('UiSidebarComponent', () => {
  let component: UiSidebarComponent;
  let fixture: ComponentFixture<UiSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
