import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtenteService } from 'src/app/services/utente.service';
import { Articoli } from 'src/app/model/articoli';
import { ARTICOLI } from '../../mock/articoli';
import { Mock } from 'protractor/built/driverProviders';
import { CarelloService } from 'src/app/services/carello.service';
@Component({
  selector: 'app-elenco-articoli',
  templateUrl: './elenco-articoli.component.html',
  styleUrls: ['./elenco-articoli.component.css']
})
export class ElencoArticoliComponent implements OnInit {
<<<<<<< HEAD
  articoli: Articoli[];
  @Output() carrello: Articoli[];
  mock: Articoli[];
=======
articoli: Articoli[];
@Output() Art;
carrello:Articoli[];
mock:  Articoli[];
>>>>>>> d098fd5849006a15c62afeaa76281d9ea2890be1

  id = this.route.snapshot.params['id'];
  constructor(private utenteService: UtenteService,
    private route: ActivatedRoute,
    private router: Router, ) {
    this.mock = this.utenteService.getMock();
    this.carrello = []
  }

  ngOnInit() {
  }

  add(art) {
    for (let cart of this.carrello) {
      if (cart.id == art.id) {
        cart.quantita = cart.quantita + 1; return
      }
    }

      this.carrello.push(art); 
    

  }
}
