import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogOutletComponent } from './blog-outlet.component';

describe('BlogOutletComponent', () => {
  let component: BlogOutletComponent;
  let fixture: ComponentFixture<BlogOutletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogOutletComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
