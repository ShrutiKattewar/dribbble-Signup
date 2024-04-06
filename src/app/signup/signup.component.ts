import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup | any;

  createForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      terms: ['', Validators.required],
    });
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  signIn() {
    this.router.navigateByUrl('welcome');
  }
}
