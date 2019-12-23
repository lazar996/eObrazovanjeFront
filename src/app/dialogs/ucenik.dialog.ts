import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Ucenici } from "../interface/ucenici";
import { KorisniciService } from "../services/korisnici.service";
import { UceniciService } from '../services/ucenici.service';


@Component({
    selector: 'ucenik.dialog',
    templateUrl: 'ucenik.dialog.html'
})
export class UcenikDialog implements OnInit{

    constructor(
        
        public dialogRef:MatDialogRef<UcenikDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        public uceniciService: UceniciService
    ){}

    ucenik:Ucenici;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.ucenik = this.dialogData.ucenik;
        this.mode = this.dialogData.mode;

    }

    forumSubmit(formData:Ucenici):void{
       
        if(this.mode=="edit"){
            formData.jmbg = this.ucenik.jmbg
        }
        this.uceniciService.uploadUcenika(formData,this.mode).subscribe(
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