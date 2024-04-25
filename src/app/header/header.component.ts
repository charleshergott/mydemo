import { Component, Input, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  template: `<button (click)="emitEvent()">emit event</button>`,

})
export class HeaderComponent {
  @Input() public title?: string;
  @Output() public childEvent: EventEmitter<string> = new EventEmitter();
  emitEvent() {
    console.log('xxx');
    this.childEvent.emit('event from child');
  }
}



