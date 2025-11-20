import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../models/user';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private fb=inject(FormBuilder);
  authService:AuthService=inject(AuthService);
  private router=inject(Router);
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]]
  });
  user:User |null=null;
  get  Username(){
    return this.loginForm.get('username');
  }
  get Password(){
    return this.loginForm.get('password');
  }
  public requiredUser(){
    return this.Username?.errors?.['required'] && this.Username.dirty;
  }
  public requiredPassword(){
    return this.Password?.errors?.['required'] && this.Password.dirty;
  }
  onSubmit(){
    this.authService.getUser().subscribe(
      data=>{
        this.user=data;
        const {username,password}=this.loginForm.value;
        let connect=this.user?.username==username && this.user?.password==password;
        if(connect){
        localStorage.setItem('state','connected');
      this.router.navigate(['/admin/dashboard']);
    }
    else{
      localStorage.setItem('state','disconnected')
      alert('mot de passe ou utilisateur invalide');
    }
      })
  }
}
