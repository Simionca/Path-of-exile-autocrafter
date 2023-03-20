
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth();
const provider = new GoogleAuthProvider();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formMode = 'login';

  setFormMode(mode: string) {
    this.formMode = mode;
  }
  constructor(public auth: AngularFireAuth) {}

  signInWithGoogle() {
    this.auth.signInWithPopup(provider);
  }

  signOut() {
    this.auth.signOut();
  }
}