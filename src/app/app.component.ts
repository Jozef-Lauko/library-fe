import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  decimal = 0;
  binary = [false, false, false, false, false, false, false, false];

  updateBinary(dec: any) {
    let decimal = parseInt(dec);
    for (let i = 0; i <= 7; i++) {
      this.binary[i] = decimal % 2 === 1;
      decimal = Math.floor(decimal / 2);
    }
    this.decimal = parseInt(dec);
  }

  updateDecimal(num: number) {
    this.decimal = 0;
    this.binary[num] = !this.binary[num];

    for (let i = 0; i <= 7; i++) {
      this.decimal += this.binary[i] ? Math.pow(2, i) : 0;
    }
  }
}
