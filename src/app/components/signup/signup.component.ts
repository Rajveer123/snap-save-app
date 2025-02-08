import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  handleResgister(registerForm : NgForm){
  console.log('form values :',registerForm.value);
  }
  handleReset(registerForm : NgForm){
    registerForm.reset();
  }
}
