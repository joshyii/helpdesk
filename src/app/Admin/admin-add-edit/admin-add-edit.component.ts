import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl,FormGroup,FormBuilder,Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService} from 'src/app/services/user.service';
import { AlertService } from 'src/app/services/alert.service';
import { MustMatch } from 'src/app/helpers';

@Component({
  selector: 'app-admin-add-edit',
  templateUrl: './admin-add-edit.component.html',
  styleUrls: ['./admin-add-edit.component.scss']
})
export class AdminAddEditComponent implements OnInit {

  form!: FormGroup;
  id?: string;
  title!: string;
  loading = false;
  submitting = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      
      this.form = this.formBuilder.group({
          username: ['', Validators.required],
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          contactNumber: ['', [this.contactNumberValidate]],
          role: ['', Validators.required],
          address: ['', [Validators.required]],
          city: ['', [Validators.required]],
          postalCode: ['', [this.postalCodeValidate]],
          state: ['', [Validators.required]],
          country: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]],
          // password and confirm password only required in add mode
          password: ['', [Validators.minLength(6), ...(!this.id ? [Validators.required] : [])]],
          confirmPassword: ['', [...(!this.id ? [Validators.required] : [])]]
      }, {
          validators: MustMatch('password', 'confirmPassword')
      });

      this.title = 'Add User';
      if (this.id) {
          // edit mode
          this.title = 'Edit User';
          this.loading = true;
          this.userService.getById(this.id)
              .pipe(first())
              .subscribe(x => {
                  this.form.patchValue(x);
                  this.loading = false;
              });
      }
  }

  postalCodeValidate(postalCode:any):object{
      let postalCodeValue=postalCode.value;
      console.log(postalCodeValue)

      if(postalCodeValue == ''){
        return {msg:'PostalCode is required'}
      }else{
        const flag = /^\d{5}$/.test(postalCodeValue);

        console.log(flag)
        return flag ? {} : {postalCodeValidator:{msg:'The amount of postalCode is 5 using number'}}
      }
  }

  contactNumberValidate(contactNumber:any):object{
      let contactNumberValue=contactNumber.value;
      console.log(contactNumberValue)

      if(contactNumberValue == ''){
        return {msg:'ContactNumber is required'}
      }else{
        const flag = /^\d{10}$/.test(contactNumberValue);
      
        console.log(flag)
        return flag ? {} : {contactNumberValidator:{msg:'The amount of phoneNumber is 10 using number'}}
      }
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.submitting = true;

      this.saveUser()
          .pipe(first())
          .subscribe({
              next: () => {
                  this.alertService.success('User saved', { keepAfterRouteChange: true });
                  this.router.navigateByUrl('/user-list');
              },
              error: error => {
                  this.alertService.error(error);
                  this.submitting = false;
              }
          })
  }

  private saveUser() {
      // create or update user based on id param
      return this.id
          ? this.userService.update(this.id!, this.form.value)
          : this.userService.create(this.form.value);
  }

}
