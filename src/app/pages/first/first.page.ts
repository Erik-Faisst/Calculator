import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  ngOnInit(): void {
  }

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
