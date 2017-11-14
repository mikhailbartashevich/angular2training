import {
  Component,
  OnInit
} from '@angular/core';

@Component({
selector: 'login-page',
styleUrls: ['./login-page.css'],
templateUrl: './login-page.html'
})

export class LoginPageComponent implements OnInit {
public localState = { value: '' };

public ngOnInit() {
  console.log('hello `login page` ');
}

}
