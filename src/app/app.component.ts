import { Component } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// export class AppComponent {
//   form = new FormGroup({
//     hodnota: new FormControl()
//   })
//
// }


export class AppComponent {
  decimal = 0;
  binary = '';

  calculate(dec: string): void {
    let decimal = parseInt(dec)
    if(decimal > 127){
      decimal = 127
    }

    this.decimal = decimal;
    let binary = "";

// iterate through the number till it becomes 0.
    while (decimal > 0) {
// if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
      if (decimal % 2 == 1) {
        binary = "1" + binary;
      } else {
        binary = "0" + binary;
      }
// divide number by 2.
      decimal = Math.floor(decimal / 2);
    }

    this.binary = binary
  }
}
