import { Component, Input, Output, EventEmitter } from '@angular/core';

/*
Generated class for the IosKeyboardKey component.

See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
for more info on Angular 2 Components.
*/
@Component({
  selector: 'ios-keyboard-key',
  templateUrl: 'ios-keyboard-key.html'
})
export class IosKeyboardKeyComponent {
  @Input() symbol: string;
  @Input() color: string;

  @Output() select: EventEmitter<string> = new EventEmitter<string>();

  outputSelect() {
    this.select.emit(this.symbol);
  }

  constructor() {
  }


  selectedElement;
  selectElement(element) {
    this.deselect();
    element.classList.add('active');
    this.selectedElement = element;

    let symbol = element.innerHTML;

    let popout = this.selectedElement.childNodes[0];
    if (popout != undefined) {
      console.log('trickle', popout);
      this.selectedElement.removeChild(popout);
    }
    element.insertAdjacentHTML('beforeend', '<div id="preview">' + symbol + '</div>');
  }


  deselect() {
    if (this.selectedElement != undefined) {
      console.log('deselect', this.selectedElement);
      this.deselectElement(this.selectedElement);

      let letter = document.getElementById('preview').innerHTML;
      let popout = this.selectedElement.childNodes[0];
      if (popout != undefined) {
        console.log('trickle', popout);
        this.selectedElement.removeChild(popout);
      }
      this.selectedElement.innerHTML = letter;

      this.selectedElement = undefined;
    }
  }

  deselectElement(element) {
    element.className = element.className.replace(new RegExp('(?:^|\\s)'+ 'active' + '(?:\\s|$)'), ' ');
  }

  focusedSymbol = '';

  click(event) {
    console.log("Click", this.symbol);
  }
  down(event) {
    console.log("down", this.symbol, event);
    this.focusedSymbol = this.symbol;
    this.selectElement(event.srcElement);
  }

  leave(event) {
    console.log("leave", this.symbol);
    this.focusedSymbol = '';
    this.deselect();
  }

  up(event) {
    console.log("up", this.symbol);
    this.deselect();

    if (this.focusedSymbol == this.symbol) {
      console.log("selected", this.symbol);
      this.outputSelect();
    }
  }


}
