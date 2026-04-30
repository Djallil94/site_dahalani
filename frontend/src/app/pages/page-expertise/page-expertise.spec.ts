import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExpertise } from './page-expertise';

describe('PageExpertise', () => {
  let component: PageExpertise;
  let fixture: ComponentFixture<PageExpertise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageExpertise],
    }).compileComponents();

    fixture = TestBed.createComponent(PageExpertise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
