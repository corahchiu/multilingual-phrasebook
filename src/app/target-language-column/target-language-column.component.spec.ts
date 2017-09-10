import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetLanguageColumnComponent } from './target-language-column.component';

describe('TargetLanguageColumnComponent', () => {
  let component: TargetLanguageColumnComponent;
  let fixture: ComponentFixture<TargetLanguageColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetLanguageColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetLanguageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
