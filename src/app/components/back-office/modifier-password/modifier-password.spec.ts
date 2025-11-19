import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPassword } from './modifier-password';

describe('ModifierPassword', () => {
  let component: ModifierPassword;
  let fixture: ComponentFixture<ModifierPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
