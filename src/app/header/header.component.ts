import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  template: `<button (click)="emitEvent()">emit event</button>`,
})

export class HeaderComponent {
  @Input() public title?: string;
  @Output() public childEvent: EventEmitter<string> = new EventEmitter();
  emitEvent() {
    console.log('xxx');
    this.childEvent.emit('event from child');
  }
  colorText() {
    if (this.title?.toLocaleLowerCase().includes('pizza')) {
      return 'var(--main-color)';
    } else {
      return 'var(--secondary-color)';
    }
  }

}




