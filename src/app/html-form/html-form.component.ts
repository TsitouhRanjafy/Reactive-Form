import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-html-form',
  standalone: true,
  imports: [
      ReactiveFormsModule,
  ],
  templateUrl: './html-form.component.html',
  styleUrl: './html-form.component.scss'
})
export class HtmlFormComponent {

  formGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    age: new FormControl(0)
  })

  onSubmit() {
    console.log(this.formGroup.value);
  }
}
