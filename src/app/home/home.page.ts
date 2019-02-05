import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // value of the input field
  private inputValue: string;
  private error: string;
  constructor() {
    this.inputValue = '';
    this.error = 'ungültig';
  }

  public btnClicked(btn) {
      if (btn == 'C') {
          this.inputValue = '';
      }
      else if (btn == '=') {
        if(this.inputValue == 'Infinity') {
          return this.error;
        }else{
          this.inputValue = eval(this.inputValue);
          }
      }
      else {
          this.inputValue += btn;
      }
    }
}
