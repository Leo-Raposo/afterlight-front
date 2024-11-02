import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRankComponent } from './dashboard-rank.component';

describe('DashboardRankComponent', () => {
  let component: DashboardRankComponent;
  let fixture: ComponentFixture<DashboardRankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardRankComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
