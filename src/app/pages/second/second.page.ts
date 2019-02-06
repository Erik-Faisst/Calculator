import { Component } from '@angular/core';
import { Signup } from '../signup/signup.page.html';


@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage {
  gotToSignup: any;
  constructor() {
  this.gotToSignup = Signup;
  }
}
