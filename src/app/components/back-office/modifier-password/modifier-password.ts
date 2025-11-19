import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth-service';

@Component({
  selector: 'app-modifier-password',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './modifier-password.html',
  styleUrl: './modifier-password.css',
})
export class ModifierPassword implements OnInit {
  private fb=inject(FormBuilder);
passwordService:AuthService=inject(AuthService);
passwordForm!:FormGroup;
password:string="";
ngOnInit(): void {
  this.passwordForm=this.fb.group({
    currentPassword:['',[Validators.required,Validators.minLength(3)]],
    newPassword:['',[Validators.required,Validators.minLength(3)]],
    confirmPassword:['',[Validators.required,Validators.minLength(3)]]
  });
  this.passwordService.getUser().subscribe(
    data=> this.password=data.password
  )
}
get getcurrentpassword(){
  return this.passwordForm.get('currentPassword');
}
get getnewpassword(){
  return this.passwordForm.get('newPassword');
}
get getconfirmpassword(){
  return this.passwordForm.get('confirmPassword');
}
OnChangePassword(){
  if(this.getconfirmpassword?.value==this.getnewpassword?.value){
    this.passwordService.newPassword(this.getnewpassword?.value as string).subscribe(
      ()=> alert('mot de passe modifier')
    )
  }
  

}
MatchPassword(){
  return this.getnewpassword?.value != this.getconfirmpassword?.value && this.getconfirmpassword?.dirty
}

}
