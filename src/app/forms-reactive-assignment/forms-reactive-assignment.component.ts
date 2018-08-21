import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Observable } from "rxjs/internal/Observable";
import { Observer } from "rxjs/internal/types";
import { Subject } from "rxjs/internal/Subject";

@Component({
  selector: "app-forms-reactive-assignment",
  templateUrl: "./forms-reactive-assignment.component.html",
  styleUrls: ["./forms-reactive-assignment.component.css"]
})
export class FormsReactiveAssignmentComponent implements OnInit {
  statuses = ["Stable", "Critical", "Finished"];
  projectForm: FormGroup;
  submitted = false;

  userData = {
    projectName: "",
    mail: "",
    status: ""
  };

  constructor() {}

  ngOnInit() {
    this.projectForm = new FormGroup({
      nameAndMail: new FormGroup({
        projectName: new FormControl(
          null,
          // [Validators.required, this.forbiddenProjectName.bind(this)]
          Validators.required,
          this.asyncForbiddenProjectName.bind(this)
        ),
        mail: new FormControl(null, [Validators.required, Validators.email])
      }),
      status: new FormControl("Stable")
    });

    this.projectForm.setValue({
      nameAndMail: {
        projectName: "test",
        mail: "test@test.com"
      },
      status: "Finished"
    });

    this.projectForm.patchValue({
      nameAndMail: {
        projectName: "test1"
      }
    });
  }

  // forbiddenProjectName(control: FormControl): { [key: string]: boolean } {
  //   if (control.value === "Test") {
  //     return { 'nameIsForbidden': true };
  //   }
  //   return null;
  // }

  asyncForbiddenProjectName(control: FormControl): Promise<any> | Observable<any> {
    // const myObservable = Observable.create((observer: Observer<any>) => {
    //   setTimeout(() => {
    //     if (control.value === 'Test') {
    //       observer.next({ 'nameIsForbidden': true });
    //     } else {
    //       observer.next(null);
    //     }
    //   }, 1000);

    //   setTimeout(() => {
    //     // observer.error('error');
    //     observer.complete();
    //   }, 5000);
    // });
    // return myObservable;

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test') {
          resolve({ 'nameIsForbidden': true });
        } else {
          resolve(null);
        }          
      }, 1000);
    });
    return promise;
  }

  onSubmit() {
    this.submitted = true;
    this.userData.projectName = this.projectForm.value.nameAndMail.projectName;
    this.userData.mail = this.projectForm.value.nameAndMail.mail;
    this.userData.status = this.projectForm.value.status;
    this.projectForm.reset();
  }
}
