import { Component, OnInit } from '@angular/core';
import { DokumentaService } from '../services/dokumenta.service';
import { Dokument } from '../interface/Dokumenta';
import { Ucenici } from '../interface/ucenici';
import { UceniciService } from '../services/ucenici.service';
import { error } from 'util';
import { MatDialog } from '@angular/material';
import {DokumentDialog} from '../dialogs/dokument.dialog'
import { SnackBarService } from '../services/snack-bar.service';
@Component({
  selector: 'app-dokumenta',
  templateUrl: './dokumenta.component.html',
  styleUrls: ['./dokumenta.component.css']
})
export class DokumentaComponent implements OnInit {

  constructor(private dokumentaService:DokumentaService,
              private uceniciService:UceniciService,
              private snackBarService:SnackBarService,
              public dialog: MatDialog) { }
  dokumenti:Dokument[];
  ucenici: Ucenici[];

  ngOnInit() {

    this.ucitavanjeDokumenata();
    this.ucitavanjeUcenika();
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
