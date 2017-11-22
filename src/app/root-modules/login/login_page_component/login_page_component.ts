import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../../shared/services';
import {User} from '../../../shared/user_model';
import './login_page_component.css';
import './login_page_component.ng.html';


@Component({
  selector: 'login-page',
  styleUrls: ['./login_page_component.css'],
  templateUrl: './login_page_component.ng.html'
})
export class LoginPageComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService) {}

  public ngOnInit() {
    this.user = {login: '', password: ''};
  }

  private onEnterButtonClick_() {
    this.authService.login(this.user);
    location.href += '/courses';
  }
}
