import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  WelcomeForm!: FormGroup | any;
  profileImg: any = '';
  defaultImg: any = '../../assets/add-photo.png';
  message: boolean = false;

  createForm() {
    this.WelcomeForm = this.fb.group({
      image: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  getImage(event: any) {
    this.profileImg = '';
    console.log(event.target.files);
    const files = event.target.files;
    if (files.length === 0) return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = true;
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.profileImg = reader.result;
      this.message = false;
    };
  }
  constructor(private router: Router, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {}

  next() {
    this.router.navigateByUrl('/finish');
  }
}
