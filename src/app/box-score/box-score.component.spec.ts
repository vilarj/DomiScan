import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxScoreComponent } from './box-score.component';

describe('BoxScoreComponent', () => {
  let component: BoxScoreComponent;
  let fixture: ComponentFixture<BoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
