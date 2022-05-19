import { Component, OnInit } from '@angular/core';
import { Annuaire } from 'src/app/models/annuaire.model';
import { AnnuaireService } from 'src/app/services/annuaire.service';

@Component({
  selector: 'app-add-annuaire',
  templateUrl: './add-annuaire.component.html',
  styleUrls: ['./add-annuaire.component.css']
})
export class AddAnnuaireComponent implements OnInit {

  annuaire: Annuaire = {
    nom:'',
    prenom:'',
    login:'',
    password:'',
    date_arrive:'',
    adressemail:'',
  }
  submitted= false;
  constructor(private annuaireService: AnnuaireService) { }

  ngOnInit(): void {
  }

  saveAnnuaire(): void{
    const data = {
    nom: this.annuaire.nom,
    prenom: this.annuaire.prenom,
    login: this.annuaire.login,
    password: this.annuaire.password,
    date_arrive: this.annuaire.date_arrive,
    adressemail: this.annuaire.adressemail,
    };
    this.annuaireService.create(data).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newAnnuaire(): void{
    this.submitted = false;
    this.annuaire = {
    nom:'',
    prenom:'',
    login:'',
    password:'',
    date_arrive:'',
    adressemail:'',
    };
  }
}
