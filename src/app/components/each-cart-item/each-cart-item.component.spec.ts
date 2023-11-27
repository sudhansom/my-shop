import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachCartItemComponent } from './each-cart-item.component';

describe('EachCartItemComponent', () => {
  let component: EachCartItemComponent;
  let fixture: ComponentFixture<EachCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachCartItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EachCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
