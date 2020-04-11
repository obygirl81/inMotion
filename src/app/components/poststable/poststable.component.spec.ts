import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoststableComponent } from './poststable.component';

describe('PoststableComponent', () => {
  let component: PoststableComponent;
  let fixture: ComponentFixture<PoststableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoststableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoststableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
