import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteCard } from './recette-card';

describe('RecetteCard', () => {
  let component: RecetteCard;
  let fixture: ComponentFixture<RecetteCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetteCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetteCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
