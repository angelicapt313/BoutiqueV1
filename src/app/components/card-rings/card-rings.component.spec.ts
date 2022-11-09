import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRingsComponent } from './card-rings.component';

describe('CardRingsComponent', () => {
  let component: CardRingsComponent;
  let fixture: ComponentFixture<CardRingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardRingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
