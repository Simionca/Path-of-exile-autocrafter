import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    const success = this.authService.login(this.username, this.password);
    if (success) {
      // TODO: Navigate to the home page
    } else {
      // TODO: Display error message
    }
  }
}
