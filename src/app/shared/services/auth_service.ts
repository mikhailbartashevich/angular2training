import {Injectable} from '@angular/core';
import {CourseDetails} from '../course_details_model';

@Injectable()
export class AuthService {

  public login() {
  }

  public logout() {
  }

  public isAuthenticated(): boolean {
    return true;
  }

  public getUserInfo(): string {
    return 'login';
  }
}
