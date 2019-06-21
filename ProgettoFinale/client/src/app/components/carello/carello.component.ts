import { Component, OnInit, Input } from '@angular/core';
import { Articoli } from 'src/app/model/articoli';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
@Input()cart;
  constructor() { }

  ngOnInit() { 
  }

}
