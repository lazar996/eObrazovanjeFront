import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DokumentaComponent } from './dokumenta/dokumenta.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { PredmetiComponent } from './predmeti/predmeti.component';
import { UceniciComponent } from './ucenici/ucenici.component';
import { NastavniciComponent } from './nastavnici/nastavnici.component';


const routes: Routes = [
  {path: 'dokumenta', component: DokumentaComponent},
  {path: 'korisnici', component: KorisniciComponent},
  {path: 'predmeti', component: PredmetiComponent},
  {path: 'ucenici', component: UceniciComponent},
  {path: 'nastavnici', component: NastavniciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
