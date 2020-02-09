import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { Uplata } from "../interface/uplata";
import { UplataService } from "../services/uplata.service";
import { KorisniciService } from '../services/korisnici.service';
import { Ucenici } from '../interface/ucenici';


@Component({
    selector: 'uplate.dialog',
    templateUrl: 'uplate.dialog.html'
})

export class UplateDialog implements OnInit{
   
    constructor(
        
        
        private korisnikService: KorisniciService,
        private uplataService: UplataService,
        public dialogRef:MatDialogRef<UplateDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        
    ){}
    
    uplata:Uplata;
    mode:string = "view";  
    ucenici: Ucenici[];

    ngOnInit(): void {
       
        console.log(this.dialogData)
        
        this.uplata= this.dialogData.uplata;
        this.mode = this.dialogData.mode;
        this.ucitavanjeUcenika();
    }

    


      forumSubmit (formData: Uplata): void{

        if(this.mode=="edit"){
             formData.uplataId = this.uplata.uplataId;
             formData.datumUplate= this.uplata.datumUplate;
             formData.brojIndeksa= this.uplata.brojIndeksa;
             
        }
        console.log(formData)
        
        this.uplataService.uploadUplata(this.mode, formData).subscribe(

           success => this.onNoClick("success"),
           error => console.log("error")
            );    }
        
      onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }
    
    ucitavanjeUcenika(){

      this.korisnikService.getUcenici().subscribe(
        succes => 
  
          this.ucenici =  succes,
       
        error=> console.log(error)
      )
  
    }
}