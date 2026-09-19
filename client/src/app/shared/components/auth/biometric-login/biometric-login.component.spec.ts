import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiometricLoginComponent } from './biometric-login.component';

describe('BiometricLoginComponent', () => {
  let component: BiometricLoginComponent;
  let fixture: ComponentFixture<BiometricLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiometricLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiometricLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
