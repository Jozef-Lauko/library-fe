import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsDetailPageComponent } from './borrowings-detail-page.component';

describe('BorrowingsDetailPageComponent', () => {
  let component: BorrowingsDetailPageComponent;
  let fixture: ComponentFixture<BorrowingsDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowingsDetailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowingsDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
