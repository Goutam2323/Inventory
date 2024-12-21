import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from './sign-in.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private userService: UserService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const user = form.value;
      this.userService.registerUser(user).subscribe(
        (response) => {
          this.userService.handleResponse(response);
        },
        (error) => {
          this.userService.handleError(error);
        }
      );
    }
  }
}
