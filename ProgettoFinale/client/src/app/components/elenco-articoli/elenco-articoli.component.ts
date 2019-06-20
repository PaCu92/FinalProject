import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UtenteService } from 'src/app/services/utente.service';
import { Articoli } from 'src/app/model/articoli';
import { ARTICOLI } from '../../mock/articoli';
import { Mock } from 'protractor/built/driverProviders';
@Component({
  selector: 'app-elenco-articoli',
  templateUrl: './elenco-articoli.component.html',
  styleUrls: ['./elenco-articoli.component.css']
})
export class ElencoArticoliComponent implements OnInit {
articoli: Articoli[];
@Output() carrello:Articoli[];
mock:  Articoli[];

  id=this.route.snapshot.params['id'];
  constructor(private utenteService : UtenteService , 
    private route: ActivatedRoute,
    private router: Router,){this.mock= this.utenteService.getMock();
     this.carrello=[]
    }

  ngOnInit() { 
  }

  add(art){this.carrello.push(art);console.log(this.carrello);
  }

}
