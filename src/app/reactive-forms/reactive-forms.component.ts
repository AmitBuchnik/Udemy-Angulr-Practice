import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenUsernames = ['David', 'Gila'];
  signUpForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.frobiddenEmails)
      }),      
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });

    this.signUpForm.valueChanges.subscribe((value) => {
      console.log(value);
    });

    this.signUpForm.statusChanges.subscribe((status) => {
      console.log(status);
    });

    this.signUpForm.get('userData.username')
      .valueChanges.subscribe(value => {
      console.log(value);
    });

    this.signUpForm.get('userData.username')
      .statusChanges.subscribe(status => {
      console.log(status);
    });

    this.signUpForm.setValue({
      'userData': {
        'username': 'Amit',
        'email': 'amitbuhnik@gmail.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signUpForm.patchValue({
      userData: {
        username: "Amit (Amram)"
      },
      hobbies: ['karate']
    });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { 'nameIsForbidden': true };
    }
    return null;
  }

  frobiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ 'emailIsForbidden': true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signUpForm);
    this.signUpForm.reset();
  }
}
