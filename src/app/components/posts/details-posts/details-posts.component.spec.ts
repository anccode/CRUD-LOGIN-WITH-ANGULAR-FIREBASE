import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostsComponent } from './details-posts.component';

describe('DetailsPostsComponent', () => {
  let component: DetailsPostsComponent;
  let fixture: ComponentFixture<DetailsPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
