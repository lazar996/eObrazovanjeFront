import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Nastavnici } from "../interface/nastavnici";
import {KorisniciService} from "../services/korisnici.service";
import { from } from 'rxjs';
import { NastavniciService } from '../services/nastavnici.service';
 
@Component({
    selector: 'nastavnik.dialog',
    templateUrl: 'nastavnik.dialog.html'
})
export class NastavnikDialog implements OnInit{

    constructor(
        public dialogRef:MatDialogRef<NastavnikDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private korisniciService:KorisniciService,
        private nastavnicikService: NastavniciService
       
    ){}

    nastavnik:Nastavnici;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.nastavnik = this.dialogData.nastavnik;
        this.mode = this.dialogData.mode;

    }

    forumSubmit(formData:Nastavnici):void{
        if(this.mode=="edit"){
             formData.jmbg=this.nastavnik.jmbg;
        }
        this.nastavnicikService.uploadNastavnik(formData,this.mode).subscribe(
            resoult=>{
                this.dialogRef.close("success");
            },
            error=>{
                console.log(error);
            }
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
    

}