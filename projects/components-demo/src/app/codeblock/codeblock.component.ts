import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-codeblock',
  templateUrl: './codeblock.component.html',
  styleUrls: ['./codeblock.component.scss'],
  preserveWhitespaces: true
})
export class CodeblockComponent {
  @Input() fileName: string;
  @Input() code: string;
}
