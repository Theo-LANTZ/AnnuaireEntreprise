import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnuaireComponent } from './components/add-annuaire/add-annuaire.component';
import { AnnuaireDetailsComponent } from './components/annuaire-details/annuaire-details.component';
import { AnnuairesListComponent } from './components/annuaires-list/annuaires-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'annuaires', pathMatch: 'full'},
  {path: 'annuaires', component: AnnuairesListComponent},
  {path: 'annuaires/:id', component: AnnuaireDetailsComponent},
  {path: 'add', component: AddAnnuaireComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
