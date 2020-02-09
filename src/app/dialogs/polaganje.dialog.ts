import { Component, OnInit, Inject } from "@angular/core";
import { KorisniciService } from '../services/korisnici.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PredmetiService } from '../services/predmeti.service';
import { Ucenici } from '../interface/ucenici';
import { Predmeti } from '../interface/predmeti';
import { PolaganjePredmeta } from '../interface/PolaganjePredmeta';
import { PolaganjePredmetaService } from '../services/polaganje-predmeta.service'
import { error } from 'protractor';



@Component({

    selector: 'polaganje.dialog',
    templateUrl: 'polaganje.dialog.html'
})
export class PolaganjeDialog implements OnInit{
       
    
    constructor(
            public korisnikService: KorisniciService,
            public dialogRef: MatDialogRef<PolaganjeDialog>,
            @Inject(MAT_DIALOG_DATA) public dialogData,
            private predmetService: PredmetiService,
            private polaganjePredmetaService: PolaganjePredmetaService
    ){}

    polaganje: PolaganjePredmeta;
    mode: string ="view";
    ucenici: Ucenici[];
    predmeti: Predmeti[];

    ngOnInit(): void {
        console.log(this.dialogData)
        this.polaganje= this.dialogData.polaganje;
        this.mode= this.dialogData.mode;
        this.readPredmete();
       
      if(this.mode ="add"){  
        this.polaganje.polozenPredmet= false
    }}

    forumSubmit(formData: PolaganjePredmeta): void {

        console.log(formData);
        this.polaganjePredmetaService.addPolaganje(formData).subscribe(
            success=> this.dialogRef.close("success"),
            error=> console.log(error)
        )
    }
    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }

    readPredmete(){

        this.predmetService.allPredmeti().subscribe(
            success=> this.predmeti = success,
            error=> console.log(error)
        );

    }

    onPredmet(val){

        this.korisnikService.getByPredmetId(val).subscribe(
            response=> {
                this.ucenici=response;
            },
            error=> console.log(error)
        )
    }

    readUcenici(){
        this.korisnikService.getUcenici().subscribe(
            success => this.ucenici = success, 
            error => console.log(error)
        );
    }
}