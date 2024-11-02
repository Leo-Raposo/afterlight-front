import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeInteractionComponent } from './code-interaction.component';

describe('CodeInteractionComponent', () => {
  let component: CodeInteractionComponent;
  let fixture: ComponentFixture<CodeInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
