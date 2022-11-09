import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselInitialComponent } from './carousel-initial.component';

describe('CarouselInitialComponent', () => {
  let component: CarouselInitialComponent;
  let fixture: ComponentFixture<CarouselInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
