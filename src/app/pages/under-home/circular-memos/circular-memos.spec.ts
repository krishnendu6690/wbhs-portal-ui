import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularMemos } from './circular-memos';

describe('CircularMemos', () => {
  let component: CircularMemos;
  let fixture: ComponentFixture<CircularMemos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircularMemos],
    }).compileComponents();

    fixture = TestBed.createComponent(CircularMemos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
