import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-deriven-forms',
  templateUrl: './template-deriven-forms.component.html',
  styleUrls: ['./template-deriven-forms.component.css']
})
export class TemplateDerivenFormsComponent implements OnInit {
  defaultSubscription: string = 'Advanced';
  submitted = false;
  subscriptions = ['Basic', 'Advanced', 'Pro'];

  data = {
    email: '',
    subscription: '',
    password: ''
  }

  @ViewChild('form') form: NgForm;

  constructor() {
  }

  ngOnInit() {
  }

  isFormInvalid() {
    return this.form.invalid && this.form.touched;
  }

  onSubmit() {
    this.submitted = true;
    this.data.email = this.form.value.userData.email;
    this.data.subscription = this.form.value.userData.subscription;
    this.data.password = this.form.value.userData.password;
    this.form.reset();
  }
}
