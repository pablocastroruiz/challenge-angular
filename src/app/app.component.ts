import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(){
  }

  public addNumbers (number1: number,number2: number = 2): number {
		return number1 + number2;
	}

}
