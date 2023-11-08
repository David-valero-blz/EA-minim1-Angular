import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueAddComponent } from './issue-add.component';

describe('IssueAddComponent', () => {
  let component: IssueAddComponent;
  let fixture: ComponentFixture<IssueAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IssueAddComponent]
    });
    fixture = TestBed.createComponent(IssueAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
