import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carello',
  templateUrl: './carello.component.html',
  styleUrls: ['./carello.component.css']
})
export class CarelloComponent implements OnInit {
@Input()cart;
  carrello: any;
  constructor() { }

  ngOnInit() { 
  }

  del(art) {
    console.log(art);
    this.carrello.slice(art); 
 
  }

}



