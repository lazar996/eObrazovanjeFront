import { Component, OnInit } from '@angular/core';
import { UplataService } from '../services/uplata.service';
import { Uplata } from '../interface/uplata';
import { SnackBarService } from '../services/snack-bar.service';
import {MatDialog} from '@angular/material'
import { UplateDialog } from '../dialogs/uplate.dialog';
import { KorisniciService } from '../services/korisnici.service';
import { error } from 'util';
import { Ucenici } from '../interface/ucenici';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-uplate',
  templateUrl: './uplate.component.html',
  styleUrls: ['./uplate.component.css']
})
export class UplateComponent implements OnInit {

  constructor(private uplateService: UplataService,
              private korisnikService: KorisniciService,
              private snackBarService:SnackBarService,
              private authService: AuthenticationService,
              private dialog: MatDialog) { }


  uplate: Uplata[];
  ucenici: Ucenici[];
  loggedIn: boolean= false;
  role: string;
  ngOnInit() {
    this.loggedIn= this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    this.ucitavanjeUplata();
    this.ucitavanjeUcenika();
    
  }

  ucitavanjeUcenika(){

    this.korisnikService.getUcenici().subscribe(
      succes => {

        this.ucenici =  succes;
      },
      error=> console.log(error)
    )

  }
  ucitavanjeUplata(){

      this.uplateService.allUplate().subscribe(
        success => {

          this.uplate = success;
        },

        error => console.log("error")
      )

  }



  openDialog(mode, uplata: Uplata =<Uplata>{}): void{
    const dialogRef = this.dialog.open(UplateDialog,{

      width: '350px',
      data:{mode:mode, uplata:uplata}
     

    });

    dialogRef.afterClosed().subscribe (result => {

      this.ngOnInit();
    })

  }
deleteUplate(uplataId: number){

    this.uplateService.deleteUplate(uplataId).subscribe(
      success=> {

          this.ucitavanjeUplata();
          this.openSnackBar("Uplata je obrisana")
      },
      error => {
        console.log(error);
      }
    )

}

  
  
  openSnackBar(message:string){
    this.snackBarService.openSnackBar(message,"ok");
  }
}
