import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
  
@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})

export class LoginPage {

  loginForm;
  captchaText = '';

  constructor(private fb: FormBuilder) {

    this.loginForm = this.fb.group({

      userId: ['',
    [
        Validators.required,
        Validators.minLength(6)        
    ]],

      password: ['',
    [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
    ]],

      captcha: ['',
    [
        Validators.required,
    ]]

    });

    this.generateCaptcha(); 

  }
onLogin() {

  if (this.loginForm.valid) {

     alert("Login Successful");

    console.log("Login Successful");

    console.log(this.loginForm.value);

  } 
  if (this.loginForm.value.captcha !== this.captchaText) {

    alert("Invalid Captcha");

    this.generateCaptcha();    

    return;

  }
  else 
  {
    alert("Please fill all required fields correctly.");

    // Clear all form fields
    this.loginForm.reset();

    // Generate a new captcha
    this.generateCaptcha();
  }

}

generateCaptcha() {

  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let captcha = '';

  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  this.captchaText = captcha;

}

}

