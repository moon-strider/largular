import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCommentBlockComponent } from './profile-comment-block.component';

describe('ProfileCommentBlockComponent', () => {
  let component: ProfileCommentBlockComponent;
  let fixture: ComponentFixture<ProfileCommentBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCommentBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileCommentBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
