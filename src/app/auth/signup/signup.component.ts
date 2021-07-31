import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { CustomValidators } from 'src/app/shared/helpers/custom.validators';
import { AsyncService } from 'src/app/shared/services/async.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthService } from '../auth.service';
import { UserInfo } from '../models/auth.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, OnDestroy {
  form: FormGroup;
  formId = 'serviceAddForm';
  userAddSub: Subscription;
  constructor(
    private fb: FormBuilder,
    private auhService: AuthService,
    private commonService: CommonService,
    private authService: AuthService,
    public asyncService: AsyncService,
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.emailCheck]],
      cellNo: ['', [Validators.required, CustomValidators.cellNumberCheck]],
    });
  }

  get name() {
    return this.form.get('name');
  }
  get password() {
    return this.form.get('password');
  }
  get email() {
    return this.form.get('email');
  }
  get cellNo() {
    return this.form.get('cellNo');
  }

  addUser(user: UserInfo) {
    if (this.form.valid) {
      this.asyncService.start();
      this.userAddSub = this.authService.addNewUser(user).subscribe(
        (isAdded) => {
          if (isAdded) {
            this.commonService.showSuccessMsg(
              'Success! The User registration completed!'
            );
            this.asyncService.finish();
            this.close();
          } else {
            this.asyncService.finish();
            this.commonService.showErrorMsg(
              'Error! The User registration not completed!'
            );
          }
        },
        (error) => {
          this.asyncService.finish();
          this.commonService.showErrorMsg('Error! Something went worng');
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
    this.asyncService.finish();
  }

  ngOnDestroy(): void {
    if (this.userAddSub) {
      this.userAddSub.unsubscribe();
    }
  }
}
