import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroWallSectionComponent } from './hero-wall-section.component';

describe('HeroWallSectionComponent', () => {
  let component: HeroWallSectionComponent;
  let fixture: ComponentFixture<HeroWallSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroWallSectionComponent]
    });
    fixture = TestBed.createComponent(HeroWallSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
