import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavbarProfileComponent } from './top-navbar-profile.component';

describe('TopNavbarProfileComponent', () => {
  let component: TopNavbarProfileComponent;
  let fixture: ComponentFixture<TopNavbarProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavbarProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopNavbarProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
