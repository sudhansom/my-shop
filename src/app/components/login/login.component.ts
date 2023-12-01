import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IAuthResponseData, LoginService } from './login.service';

import { SpinnerComponent } from '../spinner/spinner.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = '';

  submitForm(form: NgForm) {
    if (!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<IAuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.loginService.login(email, password);
    } else {
      authObs = this.loginService.signUp(email, password);
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  constructor(private loginService: LoginService) {}
}
