import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetColumnComponent } from './target-column.component';

describe('TargetColumnComponent', () => {
  let component: TargetColumnComponent;
  let fixture: ComponentFixture<TargetColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
