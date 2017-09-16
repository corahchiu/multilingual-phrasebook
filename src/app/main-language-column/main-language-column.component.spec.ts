import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLanguageColumnComponent } from './main-language-column.component';

describe('MainLanguageColumnComponent', () => {
  let component: MainLanguageColumnComponent;
  let fixture: ComponentFixture<MainLanguageColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainLanguageColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainLanguageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
