import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  standalone: true,
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {
@Input()
  title?: string= 'Welkom';
  @Input({required:true})
  description?: string = 'to our store';
}
