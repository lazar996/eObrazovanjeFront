import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { KorisniciService } from '../services/korisnici.service';
import { Ucenici } from '../interface/ucenici';
import { from } from 'rxjs';
import { DokumentaService } from '../services/dokumenta.service';



@Component({
    selector: 'dokument.dialog',
    templateUrl: 'dokument.dialog.html',
})
export class DokumentDialog implements OnInit {

    constructor(
        private dokumentService: DokumentaService,
        private korisnikService: KorisniciService,
        @Inject(MAT_DIALOG_DATA) public dokument,
        public dialogRef: MatDialogRef<DokumentDialog>,
    ) { }

    dokumentToUpload:File = null;
    ucenici:Ucenici[];
    isLoggedIn: boolean = false;
    role: string = "";

    ngOnInit(): void {
        this.ucitavanjeUcenika();
    }
    onFileInput(files: FileList){

            this.dokumentToUpload = files.item(0);
        }
    
    documentUploadFunction(dokument){
        dokument.file = this.dokumentToUpload;
        console.log(dokument);
        this.dokumentService.uploadDoc(dokument).subscribe(
          success=> this.dialogRef.close("success"),
          error=> console.log(error.message)
        );
      }

      
    onNoClick(): void {
        this.dialogRef.close();
      }

    ucitavanjeUcenika() {

        this.korisnikService.getUcenici().subscribe(
            success => {

                this.ucenici = success;
            },
            error => console.log(error)
        );
    }

}