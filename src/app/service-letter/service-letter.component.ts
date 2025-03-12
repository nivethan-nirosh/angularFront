import { Component } from '@angular/core';

@Component({
  selector: 'app-service-letter',
  imports: [],
  templateUrl: './service-letter.component.html',
  styleUrl: './service-letter.component.scss'
})
export class ServiceLetterComponent {
  id!: any;
  ojtDetails: any;
  showLetter = false;
  errorMessage = '';



}
