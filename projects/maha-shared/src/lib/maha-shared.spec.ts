import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahaShared } from './maha-shared';

describe('MahaShared', () => {
  let component: MahaShared;
  let fixture: ComponentFixture<MahaShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MahaShared],
    }).compileComponents();

    fixture = TestBed.createComponent(MahaShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
