import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { ReactiveFormsModule } from '@angular/forms'; // Add this import



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyAKmjRzP6NdwsCy0FTzJou3fMIh1E_1NS0",
        authDomain: "path-of-exile-autocrafter.firebaseapp.com",
        projectId: "path-of-exile-autocrafter",
        storageBucket: "path-of-exile-autocrafter.appspot.com",
        messagingSenderId: "404161089930",
        appId: "1:404161089930:web:f02477bd5821d40d227873",
        measurementId: "G-9WDLBJK11T",
      })
    ),
    provideAuth(() => getAuth()),
    ReactiveFormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
