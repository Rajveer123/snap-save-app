import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule], 
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email = new FormControl("",[Validators.required, Validators.email]) ;
password = new FormControl("",[Validators.required, Validators.minLength(6)]);
loginForm = new FormGroup({
  usernames: this.email,
  password: this.password
});
handleLogin(){
console.log('form values :',this.loginForm.value);
}
handleReset(){
  this.loginForm.reset();
}
}
