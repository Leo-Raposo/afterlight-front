import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeProgressComponent } from './badge-progress.component';

describe('BadgeProgressComponent', () => {
  let component: BadgeProgressComponent;
  let fixture: ComponentFixture<BadgeProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgeProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgeProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
