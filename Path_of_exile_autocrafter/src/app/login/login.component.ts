import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Import the Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  // Inject Router in your component
  constructor(private authService: AuthService, private router: Router) { }

  async onSubmit(): Promise<void> {
    const { username, password } = this.loginForm.value;
  
    if (username && password) {
      console.log('Attempting to log in with:', { username, password });
      try {
        await this.authService.login(username, password);
        console.log('Login successful');
        
        // Navigate to the home page after successful login
        this.router.navigate(['/home']);
        
      } catch (error) {
        // Display error message
        console.error('Login error:', (error as Error).message);
      }
    } else {
      // Display a message that username and password are required
      console.error('Username and password are required');
    }
  }
}
