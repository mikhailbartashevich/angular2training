import {Component, OnInit} from '@angular/core';

import './login_page_component.css';
import './login_page_component.ng.html';

@Component({
  selector: 'login-page',
  styleUrls: ['./login_page_component.css'],
  templateUrl: './login_page_component.ng.html'
})
export class LoginPageComponent implements OnInit {
  public ngOnInit() {
    console.log('hello `login page` ');
  }
}
