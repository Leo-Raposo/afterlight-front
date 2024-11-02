import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankLayoutComponent } from './rank-layout.component';

describe('RankLayoutComponent', () => {
  let component: RankLayoutComponent;
  let fixture: ComponentFixture<RankLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RankLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RankLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
