import { Component, OnInit } from '@angular/core';
import { Annuaire } from 'src/app/models/annuaire.model';
import { AnnuaireService } from 'src/app/services/annuaire.service';

@Component({
  selector: 'app-annuaires-list',
  templateUrl: './annuaires-list.component.html',
  styleUrls: ['./annuaires-list.component.css']
})
export class AnnuairesListComponent implements OnInit {

  annuaires?: Annuaire[];
  currentAnnuaire: Annuaire = {};
  currentIndex = -1;
  nom = '';
  constructor(private annuaireService: AnnuaireService) { }

  ngOnInit(): void {
    this.retrieveAnnuaires();
  }

  retrieveAnnuaires(): void{
    this.annuaireService.getAll().subscribe(data => {
      this.annuaires = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  refreshList():void{
    this.retrieveAnnuaires();
    this.currentAnnuaire = {};
    this.currentIndex = -1;
  }

  setActiveAnnuaire(annuaire: Annuaire, index:number): void {
    this.currentAnnuaire = annuaire;
    this.currentIndex = index;
  }

  removeAllAnnuaires(): void{
    this.annuaireService.deleteAll().subscribe(
      response => {
        console.log(response);
        this.refreshList();
      },
      error => {
        console.log(error);
      });
  }
  searchByName(): void {
    this.currentAnnuaire = {};
    this.currentIndex = -1;
    this.annuaireService.findByName(this.nom).subscribe(data => {
      this.annuaires = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
}
