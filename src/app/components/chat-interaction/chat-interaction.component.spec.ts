import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatInteractionComponent } from './chat-interaction.component';

describe('ChatInteractionComponent', () => {
  let component: ChatInteractionComponent;
  let fixture: ComponentFixture<ChatInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatInteractionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
