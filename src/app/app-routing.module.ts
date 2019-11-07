import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DokumentaComponent } from './dokumenta/dokumenta.component';
import { KorisniciComponent } from './korisnici/korisnici.component';


const routes: Routes = [
  {path: 'dokumenta', component: DokumentaComponent},
  {path: 'korisnici', component: KorisniciComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
