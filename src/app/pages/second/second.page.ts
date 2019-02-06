import { Component } from '@angular/core';
import { SignupPageModule } from '../signup/signup.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})

export class SecondPage {
  constructor(private router: Router) {
  }


}
