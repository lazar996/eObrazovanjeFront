import { Component, OnInit } from '@angular/core';
import { NastavniciService } from '../services/nastavnici.service';
import { KorisniciService } from '../services/korisnici.service';
import { Nastavnici } from '../interface/nastavnici';
import { SnackBarService } from '../services/snack-bar.service';
import { error } from '@angular/compiler/src/util';
import {NastavnikDialog} from '../dialogs/nastavnik.dialog'
import { MatDialog } from '@angular/material';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {

  constructor(private nastavniciService: NastavniciService, 
              private korisniciService: KorisniciService,
              private dialog:MatDialog,
              private snackBarService:SnackBarService,
              private authService: AuthenticationService) { }

  nastavnici: Nastavnici[];
  loggedIn: boolean = false;
  role: string;
  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    if(this.role != "ucenik" && this.role != "nastavnik"){
    this.ucitavanjeNastavnika();
  }}

  openNastDialog(mode,nastavnik:Nastavnici = <Nastavnici>{}):void{
    const dialogRef = this.dialog.open(NastavnikDialog,{
      width:'400px',
      data: {mode:mode,nastavnik:nastavnik}
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result=="success"){
        this.loadNastavnici();
      }
    });
  }



  ucitavanjeNastavnika(){


    this.nastavniciService.allNastavnici().subscribe(
      success => {

        this.nastavnici =success;
        console.log(this.nastavnici)
      },
      error => console.error(error)
    )
  }

  loadNastavnici(){
    this.korisniciService.getNastavnici().subscribe(
      success=> {
        this.nastavnici = success;
      }, error => {
        console.log("Ucitavanje nije uspelo!")
      }
    )
  }

  deleteNastavnik(nastavnici:Nastavnici){
    {
      this.korisniciService.deleteNastavnik(nastavnici.jmbg).subscribe(
        success=>{this.loadNastavnici();
          this.snackBarService.openSnackBar("Nastavnik uspesno izbrisan","Delete")
        },
        error=>this.snackBarService.openSnackBar("Problem sa brisanjem nastavnika!","Problem!")
      )
    }
  }
  }


