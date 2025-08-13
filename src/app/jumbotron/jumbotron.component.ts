import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css'],
  standalone: true
})
export class JumbotronComponent {
@Input()
  title?: string;
  @Input({required:true})
  description?: string ;
}
