import { Component, OnInit } from '@angular/core';
import { UtenteService } from 'src/app/services/utente.service';
import { Utente } from 'src/app/model/utente';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
utente: Utente[];
logger;
check:Boolean;
  constructor(private utenteService: UtenteService){this.logger=
  {username:"",
  password:"",
  nome: String,
};
this.check=false}
  ngOnInit() {this.getutenti();
  }
  getutenti():void{
    this.utenteService.getUtente().subscribe(utenti=>this.utente=utenti);
    };
    login()
    {for(let Pers of this.utente)
    {if(Pers.username==this.logger.username && Pers.password==this.logger.password)
    {this.check=true; 
    this.logger.name=Pers.nome;
  return}
    }
    alert("username o password non coincidono")
    }

    logout(){this.check=false;
    this.logger.username="";
  this.logger.password="";}
}
