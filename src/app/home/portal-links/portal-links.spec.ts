import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalLinks } from './portal-links';

describe('PortalLinks', () => {
  let component: PortalLinks;
  let fixture: ComponentFixture<PortalLinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortalLinks],
    }).compileComponents();

    fixture = TestBed.createComponent(PortalLinks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
