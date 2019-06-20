import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
@Input()cart;
  constructor() { console.log(this.cart);}

  ngOnInit() {
  }

}
