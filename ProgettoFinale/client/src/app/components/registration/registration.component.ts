import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtenteService } from 'src/app/services/utente.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
 @Input() utente={id:0, nome:'',cognome:'',email:'',indirizzo:'',username:'', password:''}
  constructor(private utenteservice: UtenteService,
     private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
  }

  
  registraUtente(personedata){ 
    this.utenteservice.creaUtente(this.utente).subscribe((data:{}) => {
     this.router.navigate(['/home'])  } ) }

}
