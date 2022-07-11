import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmationPageComponent } from './confirmation-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('ConfirmationPageComponent', () => {
  let component: ConfirmationPageComponent;
  let fixture: ComponentFixture<ConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationPageComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
