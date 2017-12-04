import {Component, OnInit} from '@angular/core';

import {AuthService} from '../../../shared/services';
import {User} from '../../../shared/user_model';

@Component({
  selector: 'login-page',
  styleUrls: ['./login_page_component.css'],
  templateUrl: './login_page_component.ng.html'
})
export class LoginPageComponent implements OnInit {
  public user: User = {login: '', password: ''};

  constructor(private authService: AuthService) {}

  public onEnterButtonClick() {
    this.authService.login(this.user);
    location.href += '/courses';
  }
}
