import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { log } from 'node:console';

@Component({
  selector: 'app-html-form',
  standalone: true,
  imports: [
      ReactiveFormsModule,
      NgClass,
      NgIf
  ],
  templateUrl: './html-form.component.html',
  styleUrl: './html-form.component.scss'
})

export class HtmlFormComponent implements OnInit{
  formGroup!: FormGroup;
  birthDay !: Number

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstname: new FormControl('',[Validators.required,Validators.minLength(3)]),
      lastname: new FormControl(''),
      age: new FormControl(0,[Validators.required,Validators.min(10),Validators.max(90)])
    })

    this.birthDay = 2024;
    this.formGroup.controls['age'].valueChanges.subscribe((currentAgeValue) =>{
      this.birthDay =  2024 - this.formGroup.controls['age'].value
    })
  }




  onSubmit() {
    this.formGroup.markAllAsTouched();
    if (this.formGroup.invalid){
      return;
    }
    console.warn(this.formGroup.value);
  }

  getFirstname() : string {
    return this.formGroup.controls['firstname'].value;
  }
  getLastname() : string {
    return this.formGroup.controls['lastname'].value;
  }
  getAge() : number {
    return this.formGroup.controls['age'].value;
  }



}
