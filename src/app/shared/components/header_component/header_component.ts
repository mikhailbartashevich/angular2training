import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth_service';
import {User} from '../../user_model';

@Component({
  selector: 'shared-header',
  styleUrls: ['./header_component.css'],
  templateUrl: './header_component.ng.html'
})
export class HeaderComponent implements OnInit {
  private user: User;

  constructor(private authService: AuthService) {}

  public ngOnInit() {
    this.user = this.authService.getUserInfo();
  }

  public onLogoffClick() {
    this.authService.logout();
    location.href = location.host;
  }
}
