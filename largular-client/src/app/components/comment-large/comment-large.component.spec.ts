import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLargeComponent } from './comment-large.component';

describe('CommentLargeComponent', () => {
  let component: CommentLargeComponent;
  let fixture: ComponentFixture<CommentLargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentLargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
