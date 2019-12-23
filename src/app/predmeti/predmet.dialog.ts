import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { PredmetiService } from '../services/predmeti.service';
import { Predmeti } from '../interface/predmeti';

@Component({
    selector: 'predmet.dialog',
    templateUrl: 'predmet.dialog.html'
})
export class PredmetDialog implements OnInit{

    constructor(
        public dialogRef:MatDialogRef<PredmetDialog>,
        @Inject(MAT_DIALOG_DATA) public dialogData,
        private predmetiService:PredmetiService
    ){}

    predmet:Predmeti;
    mode:string = "view";

    ngOnInit(): void {
        console.log(this.dialogData)
        this.mode = this.dialogData.mode;
        this.predmet=this.dialogData.predmet;
    }


    submitForm(formData:Predmeti):void{
        if(this.mode=="edit"){
            formData.predmetId=this.predmet.predmetId;
        }
        this.predmetiService.postPredmet(this.mode,formData).subscribe(
            success=>this.dialogRef.close("success"),
            error=>console.log(error)
        )
    }

    onNoClick(result:string="none"): void {
        this.dialogRef.close(result);
    }


}
