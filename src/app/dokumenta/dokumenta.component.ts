import { Component, OnInit } from '@angular/core';
import { DokumentaService } from '../services/dokumenta.service';
import { Dokument } from '../interface/Dokumenta';
import { Ucenici } from '../interface/ucenici';
import { UceniciService } from '../services/ucenici.service';

import { MatDialog } from '@angular/material';
import {DokumentDialog} from '../dialogs/dokument.dialog'
import { SnackBarService } from '../services/snack-bar.service';
import { AuthenticationService } from '../security/authentication.service';
import {saveAs} from "file-saver";
import { error } from 'protractor';
import { from } from 'rxjs';
@Component({
  selector: 'app-dokumenta',
  templateUrl: './dokumenta.component.html',
  styleUrls: ['./dokumenta.component.css']
})
export class DokumentaComponent implements OnInit {

  constructor(private dokumentaService:DokumentaService,
              private uceniciService:UceniciService,
              private snackBarService:SnackBarService,
              private authService: AuthenticationService,
              public dialog: MatDialog) { }
  dokumenti:Dokument[];
  ucenici: Ucenici[];
  loggedIn: boolean= false;
  role: string;
  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
   
    this.ucitavanjeDokumenata();
    this.ucitavanjeUcenika();
    console.log(this.ucitavanjeDokumenata())
  }


  downloadDokumenta(fileName: string){
    console.log("download file...")
    
    this.dokumentaService.downloadFile(fileName).subscribe(
      success=> {
        var blob = new Blob([success]);
        console.log(blob)
        saveAs(blob, fileName.split("/")[1])
       
      },error=> {
        console.log("ne moze sa skine file")
      }
    )


  }

  openDialog(): void{
    const dialogRef = this.dialog.open(DokumentDialog, {

      width: '350px',
      data: {name: "Lazar"}

    });
    dialogRef.afterClosed().subscribe(result => {

        this.ucitavanjeDokumenata();
    })

  }

  
  ucitavanjeDokumenata(){
    this.dokumentaService.allDokumenta().subscribe(
      success => {
        this.dokumenti = success;
        console.log(this.dokumenti);
      },
      error=> console.log(error)
    )
  }

  ucitavanjeUcenika(){
    this.uceniciService.allUcenici().subscribe(
      success => {
        this.ucenici = success;
        console.log(this.ucenici);
      },
      error => console.log(error)

    )

  }
  deleteDoc(id: number){

    this.dokumentaService.deleteDoc(id).subscribe(
      success=> {
        this.ucitavanjeDokumenata();
        this.openSnackBar("Dokument je obrisan");
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
