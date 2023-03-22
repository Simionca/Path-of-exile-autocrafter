import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Auth } from 'firebase/auth';
import app from '../../main';
import 'firebase/auth';

const auth: Auth = getAuth(app);
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

  signInWithGoogle() {
    this.auth.signInWithRedirect(provider);
  }

  signOut() {
    this.auth.signOut()
      .then(() => {
        console.log('Signed out successfully');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  constructor(public auth: AngularFireAuth) {}
}
