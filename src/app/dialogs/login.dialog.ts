import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { KorisniciService } from "../services/korisnici.service";
import { UplataService } from "../services/uplata.service";
import { AuthenticationService } from "../security/authentication.service";
import { LoginData } from "../interface/LoginData";
import { SnackBarService } from "../services/snack-bar.service";



@Component({
    selector: 'login.dialog',
    templateUrl: 'login.dialog.html'
})
export class LoginDialog implements OnInit{

    constructor(
        public korisnikService:KorisniciService,
        public uplataService:UplataService,
        public dialogRef:MatDialogRef<LoginDialog>,
        private authService:AuthenticationService,
        private snackBar:SnackBarService
    ){}

    ngOnInit(): void {


    }


    forumSubmit(formData:LoginData):void{
        this.authService.login(formData).subscribe(
            success=> {this.dialogRef.close("success")
            location.reload()},
            error=>this.snackBar.openSnackBar("Pogresan username/password","ok")
        )
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    

}