import {Component, OnChanges, OnInit, SimpleChanges, input, output, model} from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit, OnChanges {
  readonly isOpen = model(false);

  readonly title = input("Title");

  readonly onClose = output<string>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('NG ON CHANGES', changes);
  }

  ngOnInit(): void {
    console.log('NG ON INIT');
  }

  closePopup(): void {
    this.isOpen.set(false);
    this.onClose.emit('Pop-up window closed');
  }
}
