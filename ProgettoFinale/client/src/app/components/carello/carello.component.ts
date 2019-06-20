import { Component, OnInit, Input } from '@angular/core';
import { Articoli } from 'src/app/model/articoli';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
<<<<<<< HEAD
@Input()cart;
  constructor() { }

  ngOnInit() { 
=======
@Input() cart;
  constructor() { console.log(this.cart);}

  ngOnInit() { console.log(this.cart)
>>>>>>> d098fd5849006a15c62afeaa76281d9ea2890be1
  }

}
