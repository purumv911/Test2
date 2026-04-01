import { Component } from '@angular/core';

export interface ProgramResult {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  pageTitle = 'Java Program Results';

  results: ProgramResult[] = [
    {
      title: 'Add Two Numbers',
      description: 'Sum of 5 and 15 is: 20'
    },
    {
      title: 'Test Output',
      description: 'Test'
    }
  ];
}
