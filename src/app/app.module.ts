import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnnuaireComponent } from './components/add-annuaire/add-annuaire.component';
import { AnnuaireDetailsComponent } from './components/annuaire-details/annuaire-details.component';
import { AnnuairesListComponent } from './components/annuaires-list/annuaires-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnnuaireComponent,
    AnnuaireDetailsComponent,
    AnnuairesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
