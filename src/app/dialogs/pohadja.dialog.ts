import { Component, OnInit, Inject } from '@angular/core';
import { KorisniciService } from '../services/korisnici.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PredmetiService } from '../services/predmeti.service';
import { Ucenici } from '../interface/ucenici';
import { Predmeti } from '../interface/predmeti';
import { Pohadja } from '../interface/Pohadja';
import { PohadjanjepredmetaService } from '../services/pohadjanjepredmeta.service';

@Component({
    selector: 'pohadja.dialog',
    templateUrl: 'pohadja.dialog.html'
})
export class PohadjaDialog implements OnInit{

    constructor(
        public korisnikService: KorisniciService,
        public dialogRef: MatDialogRef<PohadjaDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService: PredmetiService,
        private pohadjanjePredmetaService: PohadjanjepredmetaService
       
    
    ){}

        predmetId: number;
        ucenici: Ucenici[];
        predmeti: Predmeti[];
    ngOnInit(): void {
      this.predmetId= this.dialogData.predmetId;
      this.loadUcenici();
      
    }

    loadUcenici(): void{


        this.korisnikService.UceniciBezKursa(this.predmetId).subscribe(
            success=> this.ucenici = success, 
            error=> console.log("ne ucivaju se")
        )
    }

    forumSubmit(pohadjaFrom:Pohadja):void{
        
       this.dialogRef.close(pohadjaFrom)
}

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }


    uceniciPohadjaju(): void {

        this.korisnikService.getByPredmetId(this.predmetId).subscribe(
          response => this.ucenici= response,
          
          error => console.log(error)
        )
    
      }
}