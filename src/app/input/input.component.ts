import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
  
})
export class InputComponent {
  @Input('childToMaster') widthPercentage: number = 90;
  @Output() newMessageEvent = new EventEmitter<string>();

  submitMessage() {
    const text = (<HTMLInputElement>document.getElementById("message")).value;
    this.newMessageEvent.emit(text);
    (<HTMLInputElement>document.getElementById("message")).value = "";
  }

}
