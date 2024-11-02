import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgesLayoutComponent } from './badges-layout.component';

describe('BadgesLayoutComponent', () => {
  let component: BadgesLayoutComponent;
  let fixture: ComponentFixture<BadgesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BadgesLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BadgesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
