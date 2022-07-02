import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLegalComponent } from './footer-legal.component';

describe('FooterLegalComponent', () => {
  let component: FooterLegalComponent;
  let fixture: ComponentFixture<FooterLegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLegalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
