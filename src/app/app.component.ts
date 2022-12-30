
import { NgFor } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  @ViewChild('p') signupForm: NgForm;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  answer = '';
  genders = ['male', 'female'];
  defaultQuestion = 'teacher';

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.form.patchValue({
    //   userData: {
    //     username: suggestedName,
    //   },
    // });
  }

  onSubmit(form: NgForm) {
    this.user.username = this.signupForm.value.userData.username;
  }

  title = 'BigUdemy';
 main

}
