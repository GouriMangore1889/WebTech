import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptRoute } from './concept-route';

describe('ConceptRoute', () => {
  let component: ConceptRoute;
  let fixture: ComponentFixture<ConceptRoute>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConceptRoute],
    }).compileComponents();

    fixture = TestBed.createComponent(ConceptRoute);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
