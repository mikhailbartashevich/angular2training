import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'login-page',
  styleUrls: ['./login_page.css'],
  templateUrl: './login_page.ng.html'
})
export class LoginPage implements OnInit {
  public localState = { value: '' };

  public ngOnInit() {
    console.log('hello `login page` ');
  }
}
