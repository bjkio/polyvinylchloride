import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHmenuComponent } from './ui-hmenu.component';

describe('UiHmenuComponent', () => {
  let component: UiHmenuComponent;
  let fixture: ComponentFixture<UiHmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiHmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
