import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {UserService} from "../services/user.service";
import {error} from "util";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  @ViewChild('authForm') authForm: NgForm;
  loginMode: boolean = true;
  isLoading: boolean = false;
  error: string = null;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  switchMode() {
    this.loginMode = !this.loginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) {
      return;
    }
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;
    this.isLoading = true;

    if (this.loginMode) {
      this.authenticationService.signIn(email, password).subscribe(
        responseData => {
          this.isLoading = false;
          this.userService.onSignIn();
        }, error => {
          this.error = error;
          this.isLoading = false;
        });
    } else {
      this.authenticationService.signUp(email, password).subscribe(
        responseData => {
          this.isLoading = false;
          this.userService.onSignIn();
        }, error => {
          this.error = error;
          this.isLoading = false;
        });
    }
  }
}
