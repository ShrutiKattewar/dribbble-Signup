import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss'],
})
export class FinishComponent implements OnInit {
  radioForm: FormGroup;
  showButton: any = false;

  constructor(
    private location: Location,
    private router: Router,
    fb: FormBuilder
  ) {
    this.radioForm = fb.group({
      Option: ['', Validators.required],
    });
  }

  result(event: any) {
    if (event.target.value) {
      this.showButton = true;
    }
  }

  ngOnInit(): void {}

  back() {
    this.location.back();
  }

  goHome() {
    console.log('hohk');

    this.router.navigateByUrl('/home');
  }
}
