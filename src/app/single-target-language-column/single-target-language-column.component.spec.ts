import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTargetLanguageColumnComponent } from './single-target-language-column.component';

describe('SingleTargetLanguageColumnComponent', () => {
  let component: SingleTargetLanguageColumnComponent;
  let fixture: ComponentFixture<SingleTargetLanguageColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTargetLanguageColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTargetLanguageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
