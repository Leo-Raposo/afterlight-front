import { Component, ElementRef, AfterViewInit, ViewChild, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MonacoLoaderService } from '../../services/monaco-loader.service';
import { filter, take } from 'rxjs/operators';

declare const monaco: any;

@Component({
  selector: 'app-monaco-editor',
  standalone: true,
  template: `<div #editorContainer style="height: 600px; border: 1px solid gray;"></div>`,
  styles: [`:host { display: block; width: 100%; height: 100%; }`]
})
export class MonacoEditorComponent implements AfterViewInit, OnDestroy {
  @ViewChild('editorContainer', { static: false }) editorContainer!: ElementRef;
  private editorInstance: any;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private monacoLoader: MonacoLoaderService
  ) { }

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.monacoLoader.monacoLoaded$
        .pipe(
          filter(loaded => loaded),
          take(1)
        )
        .subscribe(() => {
          this.initMonaco();
        });
    }
  }

  private initMonaco() {
    if (!this.editorContainer || typeof monaco === 'undefined') {
      return;
    }

    monaco.editor.defineTheme('draculaTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '6272a4', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'ff79c6' },
        { token: 'number', foreground: 'bd93f9' },
        { token: 'string', foreground: 'f1fa8c' },
        { token: 'function', foreground: '50fa7b' },
        { token: 'identifier', foreground: 'f8f8f2' },
        { token: 'delimiter', foreground: 'f8f8f2' },
      ],
      colors: {
        'editor.foreground': '#f8f8f2',
        'editor.background': '#151927',
        'editorCursor.foreground': '#f8f8f0',
        'editor.lineHighlightBackground': '#3b3e4a',
        'editorLineNumber.foreground': '#6272a4',
        'editor.selectionBackground': '#44475a',
        'editor.inactiveSelectionBackground': '#44475a80',
        'editor.selectionHighlightBackground': '#44475a',
      }
    });

    this.editorInstance = monaco.editor.create(this.editorContainer.nativeElement, {
      value: "class Greeter {\n\n    String getGreeting() {\n        //return \"Hello, World!\";\n    }\n\n}",
      language: 'javascript',
      theme: 'draculaTheme',
      automaticLayout: true,
      minimap: { enabled: true },
      scrollBeyondLastLine: false,
      renderLineHighlight: 'all',
      renderLineHighlightOnlyWhenFocus: false
    });

    monaco.editor.setTheme('draculaTheme');
  }

  public getValue(): string {
    return this.editorInstance ? this.editorInstance.getValue() : '';
  }

  ngOnDestroy() {
    if (this.editorInstance) {
      this.editorInstance.dispose();
    }
  }
}