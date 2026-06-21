import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTiles } from './login-tiles';

describe('LoginTiles', () => {
  let component: LoginTiles;
  let fixture: ComponentFixture<LoginTiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginTiles],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTiles);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
