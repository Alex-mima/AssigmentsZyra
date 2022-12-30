import { NgForm } from '@angular/forms';
<<<<<<< HEAD
import { Component, ViewChild } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 255f3ed0d2826000591a6d84c937cea338fcd853

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  title = 'BigUdemy';

<<<<<<< HEAD
  onSubmit() {}
=======
  onSubmit(form: NgForm) {
    console.log(NgForm);
  }
>>>>>>> 255f3ed0d2826000591a6d84c937cea338fcd853
}
