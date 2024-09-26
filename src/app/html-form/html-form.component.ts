import { NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


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
    this.formGroup.reset();
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

// ** EXEMPLE 1 : By Default, a FormControl is nullable
/*
  const firstname = new FormControl('John');
  firstname.value; // 'John' (type : string | null)
  firstname.value.substring(1); // Error: Object is possible null
*/

// ** EXEMPLE 2 : We can create a nonNullable FormControl
/*
  const lastname = new FormControl('John',{ nonNullable:true });
  lastname.value; / 'John' (type: string)
  lastname.value.substring(1); // 'ohn'

  lastname.reset();
  lastname.value; // ''
*/

// ** EXEMPLE 3 : FormGroup.value returns undefined a FormControl is disabled
/*
  const lastname = new FormControl('John',{ nonNullable:true });
  formGroupe.controls.firstname.disabled();

  console.log(formGroup.value);
  // value : { firstname : undefined }
  // type : { firstname : string | undefined }

  console.log(formGroup.getRawValue());
  // value: { firstname : 'John' }
  // type : { firstname : string }
*/




 
