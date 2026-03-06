import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaCore } from './maha-core';

describe('MahaCore', () => {
  let component: MahaCore;
  let fixture: ComponentFixture<MahaCore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MahaCore],
    }).compileComponents();

    fixture = TestBed.createComponent(MahaCore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
