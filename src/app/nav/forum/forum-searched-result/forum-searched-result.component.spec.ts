import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSearchedResultComponent } from './forum-searched-result.component';

describe('ForumSearchedResultComponent', () => {
  let component: ForumSearchedResultComponent;
  let fixture: ComponentFixture<ForumSearchedResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSearchedResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSearchedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
