import { Component, OnInit, Inject } from "@angular/core";
import { Uplata } from "../interface/Uplata";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisniciService } from "../services/korisnici.service";
import { UplataService } from "../services/uplata.service";
import { AuthenticationService } from "../security/authentication.service";
import { LoginData } from "../interface/LoginData";
import { PasswordChange } from "../interface/PasswordChange";



@Component({
    selector: 'password.dialog',
    templateUrl: 'password.dialog.html'
})
export class PasswordDialog implements OnInit{

    constructor(
        public korisnikService:KorisniciService,
        public dialogRef:MatDialogRef<PasswordDialog>,
    ){}

    ngOnInit(): void {


    }


    submitPassword(formData:PasswordChange):void{
        this.korisnikService.changePassowrd(formData).subscribe(
            success=>this.dialogRef.close("success"),
            error=>console.log(error)
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    

}