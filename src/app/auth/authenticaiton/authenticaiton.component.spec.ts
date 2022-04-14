import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticaitonComponent } from './authenticaiton.component';

describe('AuthenticaitonComponent', () => {
  let component: AuthenticaitonComponent;
  let fixture: ComponentFixture<AuthenticaitonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthenticaitonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticaitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
