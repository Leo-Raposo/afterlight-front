import { Component, ElementRef, ViewChild, AfterViewChecked, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { sendChatMessage } from '../../services/chat.service';
import { executeGetExerciseInstruction } from '../../services/chat.service';
import { InteractionService } from '../../services/code-chat-interaction.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-interaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-interaction.component.html',
  styleUrl: './chat-interaction.component.css'
})
export class ChatInteractionComponent implements AfterViewChecked, OnInit {
  newMessage: string = '';
  messages: { sender: string, content: string }[] = [];
  exercise: string = 'hello-world';
  language: string = 'java';

  @ViewChild('chatMessagesContainer') private chatMessagesContainer!: ElementRef;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private interactionService: InteractionService,
    private sanitizer: DomSanitizer
  ) {
    this.route.queryParams.subscribe(params => {
      this.exercise = params['exercise'] || 'hello-world';
      this.language = params['language'] || 'java';
    });
  }

  ngOnInit() {
    this.initializeChat();
    this.initMessagesService();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  insertAssistantMessage(msg: string) {
    this.messages.push({ sender: 'assistant', content: msg });
  }

  private initializeChat(): void {
    this.getExerciseInstruction("java", this.exercise);
  }

  private initMessagesService(): void {
    this.interactionService.message$.subscribe(message => {
      this.insertAssistantMessage(message);
    });
  }

  async getExerciseInstruction(language: string, name: string): Promise<void> {
    try {
      const response = await executeGetExerciseInstruction(language, name);
      this.insertAssistantMessage(response.instructions);
    } catch (error) {
      console.error('Failed to get exercise instructions:', error);
    }
  }

  async submitMessage(): Promise<void> {
    const sendingMessage: string = this.newMessage;
    this.newMessage = '';
    if (sendingMessage.trim()) {
      this.messages.push({ sender: 'user', content: sendingMessage });

      try {
        const response = await sendChatMessage(this.messages);
        this.messages.push({ sender: 'assistant', content: response });
      } catch (error) {
        console.error('Failed to send message:', error);
      }
    }
  }

  private scrollToBottom(): void {
    try {
      this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
    } catch (err) {
      console.error('Failed to scroll to bottom:', err);
    }
  }
}
