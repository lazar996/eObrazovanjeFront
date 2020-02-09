import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { KorisniciService } from '../services/korisnici.service';
import { PredmetiService } from '../services/predmeti.service';
import { Nastavnici } from '../interface/Nastavnici';
import { Ucenici } from '../interface/ucenici';
import { Pohadja } from '../interface/Pohadja';
import { Predaje } from '../interface/Predaje';

@Component({
    selector: 'predaje.dialog',
    templateUrl: 'predaje.dialog.html'
})
export class PredajeDialog implements OnInit{

    constructor(
        public korisnikService:KorisniciService,
        public dialogRef:MatDialogRef<PredajeDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetService:PredmetiService,
    ){}

    predmetId:number;
    nastavnici:Nastavnici[];
    

    ngOnInit(): void {
        this.predmetId=this.dialogData.predmetId;
        this.loadNastavnici();

    }

    loadNastavnici(): void{


        this.korisnikService.newNastavnik(this.predmetId).subscribe(
            success=> this.nastavnici = success, 
            error=> console.log("ne ucivaju se")
        )
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }


    forumSubmit(predajeForm: Predaje):void{
        
        this.dialogRef.close(predajeForm)
 }
}