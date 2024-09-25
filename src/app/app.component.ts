import { Component } from '@angular/core';
import { HtmlFormComponent } from './html-form/html-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HtmlFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
