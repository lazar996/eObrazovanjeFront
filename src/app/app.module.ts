import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { DokumentaService } from './services/dokumenta.service'
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DokumentaComponent } from './dokumenta/dokumenta.component';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';

@NgModule({
  declarations: [
    AppComponent,
    DokumentaComponent,
    KorisniciComponent,
    PredmetiComponent,
    UceniciComponent,
    NastavniciComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers:[DokumentaService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
