import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailsResumeComponent } from './trails-resume.component';

describe('TrailsResumeComponent', () => {
  let component: TrailsResumeComponent;
  let fixture: ComponentFixture<TrailsResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrailsResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrailsResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
