import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1 *ngIf="aux">Hello {{name}}</h1>
  <input type="text" [value]="name" [(ngModel)]="name" [ngClass]="{active: aux, 'font-color': aux1}">
  <button type="button" (click)="changeBackground()">Change background</button>
  <button type="button" (click)="changeFontColor()">Change font color</button>
  <ul>
    <li *ngFor="let alberto of albertos">{{alberto.id}} - {{alberto.name}}</li>
  </ul> 
  `,
  styles: [`
    .active {
      background-color: blue;
    }

    .font-color{
      color: white;
    }
  `]
})
export class AppComponent {
  name = 'Mundo';
  aux: boolean;
  aux1: boolean;
  albertos: Array<Object> = [
    { id: 1, name: 'Alberto' },
    { id: 2, name: 'Albertico' },
    { id: 3, name: 'Alberta' },
    { id: 4, name: 'Albertica' }
  ]

  changeBackground() {
    this.aux = !this.aux;
  }

  changeFontColor() {
    this.aux1 = !this.aux1;
  }
}
