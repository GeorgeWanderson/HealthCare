import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderScreenComponent } from './header-screen.component';

describe('HeaderScreenComponent', () => {
  let component: HeaderScreenComponent;
  let fixture: ComponentFixture<HeaderScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
