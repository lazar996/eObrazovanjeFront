import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../services/korisnici.service';
import { PohadjanjepredmetaService } from '../services/pohadjanjepredmeta.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Ucenici } from '../interface/ucenici';
import { Nastavnici } from '../interface/Nastavnici';
import { PohadjaDialog } from '../dialogs/pohadja.dialog';
import { Pohadja } from '../interface/Pohadja';
import { error } from 'protractor';
import { PredajeDialog } from '../dialogs/predaje.dialog';
import { Predaje } from '../interface/Predaje';
import { AuthenticationService } from '../security/authentication.service';


@Component({
  selector: 'app-pohadjanje-list',
  templateUrl: './pohadjanje-list.component.html',
  styleUrls: ['./pohadjanje-list.component.css']
})
export class PohadjanjeListComponent implements OnInit {

  constructor(private korisniciService: KorisniciService,
              private pohadjanjePredmeta: PohadjanjepredmetaService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private authService: AuthenticationService) {
              this.predmetId= parseInt(this.route.snapshot.queryParamMap.get('id'));
                console.log(this.predmetId)
            }              
      predmetId: number = 0;
      ucenici: Ucenici[];
      idNotFound: boolean= true;
      nastavnici: Nastavnici[];
      loggedIn: boolean =false;
      role: string;
      
  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    if(this.role !="ucenik")   { 
      if(isNaN(this.predmetId)){

        this.idNotFound=true;
      }else{

        this.idNotFound= false;
        this.uceniciPohadjaju();
        this.getNastavnici();
        
    }}
  }


  uceniciPohadjaju(): void {

    this.korisniciService.getByPredmetId(this.predmetId).subscribe(
      response => this.ucenici= response,
      
      error => console.log(error)
    )

  }
  getNastavnici(): void {

    this.korisniciService.getNastavnikByPredmetId(this.predmetId).subscribe(
      response => this.nastavnici = response,
      error => console.log(error)
    )

  }

  openUcenikDialog(): void{

    const dialogRef = this.dialog.open(PohadjaDialog,{
      width: '400px',
      data: {predmetId: this.predmetId}
    })
    dialogRef.afterClosed().subscribe(
      (pohadjaFrom: Pohadja)=>{
        pohadjaFrom.predmetId = this.predmetId;
        console.log(pohadjaFrom);
        this.pohadjanjePredmeta.newPohadjnje(pohadjaFrom).subscribe(
          success=>this.ngOnInit(),
          error=>console.log(error)
        )
      }
    )
  }

  openNastavnikDialog(): void{

    const dialogRef = this.dialog.open(PredajeDialog,{

      width: '400px',
      data: {predmetId: this.predmetId}
      

    })
    dialogRef.afterClosed().subscribe(
      (predajeForm: Predaje)=>{
        predajeForm.predmetId = this.predmetId;
        console.log(predajeForm);
        this.pohadjanjePredmeta.newPredavanje(predajeForm).subscribe(
          success=> this.ngOnInit(),
          error=> console.log(error)
        )
      }

    )
  }

  deletePohadja(jmbg): void{

    this.pohadjanjePredmeta.deletePohadja(this.predmetId, jmbg).subscribe(
      success => this.ngOnInit(),
      error=> console.log(error)
    )

  }

  deletePredaje(jmbg): void{
    this.pohadjanjePredmeta.deletePredaje(this.predmetId,jmbg).subscribe(
      success => this.ngOnInit(),
      error => console.log(error)
    )
  }
}
