import {Component, input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  standalone: true
})
export class JumbotronComponent {
readonly title = input<string>();
  readonly description = input.required<string | undefined>();
}
