import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js/lib/core';

@Pipe({
  name: 'highlightCode',
  standalone: true
})
export class HighlightCodePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value) return value;
    const highlighted = hljs.highlightAuto(value);
    return highlighted.value;
  }
}
