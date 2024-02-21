import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Input_i_Output_YT';

  currentFood = 'soup';

  foods = ['pasta', 'bread', 'pizza', 'burrito'];

  addFood(newFood: string) {
    this.foods.push(newFood);
    this.clearInput();
  }

  clearInput() {
    let input = <HTMLInputElement>document.getElementById('foodInput');
    input.value = '';
  }
}
