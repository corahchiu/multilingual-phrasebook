import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLanguageDropdownComponent } from './select-language-dropdown.component';

describe('SelectLanguageDropdownComponent', () => {
  let component: SelectLanguageDropdownComponent;
  let fixture: ComponentFixture<SelectLanguageDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLanguageDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLanguageDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
