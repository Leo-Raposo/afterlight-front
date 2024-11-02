import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePage4Component } from './home-page4.component';

describe('HomePage4Component', () => {
  let component: HomePage4Component;
  let fixture: ComponentFixture<HomePage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
