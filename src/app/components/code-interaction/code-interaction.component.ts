import { Component, ViewChild } from '@angular/core';
import { HighlightCodePipe } from '../../pipe/highlight-code.pipe';
import { CommonModule } from '@angular/common';
import { MonacoEditorComponent } from '../monaco-editor/monaco-editor.component';
import { MiniCardComponent } from '../mini-card/mini-card.component';
import { Router, ActivatedRoute } from '@angular/router';
import { CodeSubmissionService } from '../../services/code-submission.service';
import { InteractionService } from '../../services/code-chat-interaction.service';

@Component({
  selector: 'app-code-interaction',
  standalone: true,
  imports: [HighlightCodePipe, CommonModule, MonacoEditorComponent, MiniCardComponent],
  templateUrl: './code-interaction.component.html',
  styleUrls: ['./code-interaction.component.css']
})
export class CodeInteractionComponent {
  @ViewChild(MonacoEditorComponent) monacoEditor!: MonacoEditorComponent;
  showPopup: boolean = false;
  codeText: string = '';
  userName: string = 'murilo';
  exercise: string = '';
  language: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private codeSubmissionService: CodeSubmissionService,
    private interactionService: InteractionService
  ) {

    this.route.queryParams.subscribe(params => {
      this.exercise = params['exercise'] || '';
      this.language = params['language'] || '';
    });
  }

  // Navegar para o dashboard
  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  success(): void {
    this.showPopup = true;
  }

  insertMessage(msg: string) {
    this.interactionService.sendMessage(msg);
  }

  // Submeter o código, capturando dados do editor e enviando via serviço
  async submitCode(): Promise<void> {
    this.codeText = this.monacoEditor.getValue(); // Obtém o código do editor

    console.log('Usuário:', this.userName);
    console.log('Nome do Exercício:', this.exercise);
    console.log('Linguagem:', this.language);
    console.log('Código capturado:', this.codeText);

    try {
      // Enviar dados ao serviço de submissão de código
      const response = await this.codeSubmissionService.submitCode(
        this.userName,            // Nome do usuário capturado da URL
        this.exercise,             // Nome do exercício capturado da URL
        this.language,             // Linguagem capturada da URL
        this.codeText              // Código capturado do editor
      );
      console.log('Resposta do servidor:', response);

      if (/*response.finished === true &&*/ !this.codeText.includes("//"))
        this.success();
      else {
        this.insertMessage(response.suggestions.join('\n'));
      }
    } catch (error) {
      console.error('Erro ao enviar o código:', error);
    }
  }
}
