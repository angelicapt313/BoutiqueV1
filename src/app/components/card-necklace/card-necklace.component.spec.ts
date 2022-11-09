import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNecklaceComponent } from './card-necklace.component';

describe('CardNecklaceComponent', () => {
  let component: CardNecklaceComponent;
  let fixture: ComponentFixture<CardNecklaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNecklaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNecklaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
