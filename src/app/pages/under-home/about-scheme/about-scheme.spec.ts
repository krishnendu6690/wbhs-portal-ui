import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutScheme } from './about-scheme';

describe('AboutScheme', () => {
  let component: AboutScheme;
  let fixture: ComponentFixture<AboutScheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutScheme],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutScheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
