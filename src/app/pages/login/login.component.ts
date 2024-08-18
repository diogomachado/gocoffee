import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  submitted = false;
  myForm: FormGroup;

  get email() {
    return this.myForm.get('email');
  }

  constructor(private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });

    this.myForm.valueChanges.subscribe((value) => {
      console.log('Value changed', value);
    });
  }

  handleSubmit() {
    this.submitted = true;

    if (this.myForm.valid) {
      console.log('Form submitted', this.myForm.value);
    }
  }
}
