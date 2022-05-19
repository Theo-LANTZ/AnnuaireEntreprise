import { Component, OnInit } from '@angular/core';
import { AnnuaireService } from 'src/app/services/annuaire.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Annuaire } from 'src/app/models/annuaire.model';
@Component({
  selector: 'app-annuaire-details',
  templateUrl: './annuaire-details.component.html',
  styleUrls: ['./annuaire-details.component.css']
})
export class AnnuaireDetailsComponent implements OnInit {

  currentAnnuaire: Annuaire = {
    nom: '',
    prenom: '',
    login: '',
    password: '',
    date_arrive: '',
    adressemail: '',
  };
  message = '';
  constructor(private annuaireService: AnnuaireService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getAnnuaire(this.route.snapshot.params.id);
  }
  getAnnuaire(id: string): void {
    this.annuaireService.get(id).subscribe(
      data => {
        this.currentAnnuaire = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }
  updateAnnuaire(): void{
    this.message = '';
    this.annuaireService.update(this.currentAnnuaire.nom, this.currentAnnuaire.prenom).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/annuaires']);
      },error => {
        console.log(error);
      });
    }

    deleteAnnuaire(): void{
      this.annuaireService.delete(this.currentAnnuaire.id).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/annuaires']);
        }, error => {
          console.log(error);
        });
    }
}
