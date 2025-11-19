import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRecette } from './modifier-recette';

describe('ModifierRecette', () => {
  let component: ModifierRecette;
  let fixture: ComponentFixture<ModifierRecette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierRecette]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierRecette);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
