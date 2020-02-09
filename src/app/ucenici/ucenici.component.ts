import { Component, OnInit } from '@angular/core';
import { UceniciService } from '../services/ucenici.service';
import { Ucenici } from '../interface/ucenici';
import { HttpClient } from '@angular/common/http';
import { KorisniciService } from '../services/korisnici.service';
import { SnackBarService } from '../services/snack-bar.service';
import { MatDialog } from '@angular/material';
import { UcenikDialog } from '../dialogs/ucenik.dialog';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html',
  styleUrls: ['./ucenici.component.css']
})
export class UceniciComponent implements OnInit {

  constructor(private _http: HttpClient,
    private korisniciService: KorisniciService,
    private uceniciService: UceniciService,
    private snackBarService: SnackBarService,
    private dialog: MatDialog,
    private authService: AuthenticationService) { }


  ucenici: Ucenici[];
  loggedIn: boolean = false;
  role: string;

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    if (this.role != "ucenik") {
      this.ucitavanjeUcenika();
    }
  }

  ucitavanjeUcenika() {

    this.uceniciService.allUcenici().subscribe(

      success => {

        this.ucenici = success;

        console.log(this.ucenici)
      },
      error => console.error(error)

    )
  }

  loadUcenici() {
    this.korisniciService.getUcenici().subscribe(
      success => {
        this.ucenici = success;
      }, error => {
        console.log("Ucitavanje nije uspelo!")
      }
    )
  }
  deleteUcenik(ucenici: Ucenici) {

    this.uceniciService.deleteUcenik(ucenici.jmbg).subscribe(
      success => {
        this.loadUcenici();
        this.snackBarService.openSnackBar("Ucenik je uspesno obrisan", "ok")
      },
      error => this.snackBarService.openSnackBar("Problem sa brisanjem ucenika!", "ok")
    )
  }

  openUcenikDialog(mode, ucenik: Ucenici = <Ucenici>{}): void {
    const dialogRef = this.dialog.open(UcenikDialog, {
      width: '400px',
      data: { mode: mode, ucenik: ucenik }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == "success") {
        this.ngOnInit();
      }
    });
  }
}


