import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalBoxScoreComponent } from './total-box-score.component';

describe('TotalBoxScoreComponent', () => {
  let component: TotalBoxScoreComponent;
  let fixture: ComponentFixture<TotalBoxScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalBoxScoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalBoxScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
