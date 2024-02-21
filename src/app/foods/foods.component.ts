import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent {
  @Input() food = 'pizza';
  //kazemo da se food dobiti neku vrednost iz parent.ts

  @Output() newFoodEvent = new EventEmitter<string>();
  //kazemo da ce child poslati nesto parentu kad se desi newFoodEvent

  addNewFood(value: string) {
    //addNewFood treba da primi neki value u HTMLu
    this.newFoodEvent.emit(value); //i tu value treba da emituje
  }
}
