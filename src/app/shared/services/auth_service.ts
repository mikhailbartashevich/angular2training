import {Injectable} from '@angular/core';
import {CourseDetails} from '../course_details_model';
import {User} from '../user_model';

@Injectable()
export class AuthService {

  public login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logout() {
    localStorage.setItem('user', null);
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  public getUserInfo(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
