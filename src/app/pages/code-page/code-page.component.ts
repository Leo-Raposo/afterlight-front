import { Component } from '@angular/core';
import { CodeInteractionComponent } from '../../components/code-interaction/code-interaction.component';
import { ChatInteractionComponent } from '../../components/chat-interaction/chat-interaction.component';

@Component({
  selector: 'app-code-page',
  standalone: true,
  imports: [CodeInteractionComponent, ChatInteractionComponent],
  templateUrl: './code-page.component.html',
  styleUrl: './code-page.component.css'
})
export class CodePageComponent {

}
