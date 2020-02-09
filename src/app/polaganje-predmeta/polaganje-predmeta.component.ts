import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PolaganjePredmetaService } from '../services/polaganje-predmeta.service';
import { SnackBarService } from '../services/snack-bar.service';
import { PolaganjePredmeta } from '../interface/PolaganjePredmeta';
import { AuthenticationService } from '../security/authentication.service';
import { PolaganjeDialog } from '../dialogs/polaganje.dialog';
import { error } from 'protractor';


@Component({
  selector: 'app-polaganje-predmeta',
  templateUrl: './polaganje-predmeta.component.html',
  styleUrls: ['./polaganje-predmeta.component.css']
})
export class PolaganjePredmetaComponent implements OnInit {

  constructor(private dialog: MatDialog, 
              private polaganjePredmetaService: PolaganjePredmetaService,
              private snackBarService: SnackBarService,
              private authService: AuthenticationService
              ) { }


  polaganje: PolaganjePredmeta[]   
  loggedIn: boolean = false;
  role: string;

  ngOnInit() {
    this.getAll();
    console.log(this.getAll())
    this.loggedIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    
  }

  getAll(): void{

    this.polaganjePredmetaService.getAll().subscribe(
      response => this.polaganje= response,
      error => console.log(error)
    )
  }
  openDialog(mode:string,polaganje:PolaganjePredmeta=<PolaganjePredmeta>{}):void{
    const dialogRef = this.dialog.open(PolaganjeDialog,{
      width:'400px',
      data:{mode:mode,polaganje:polaganje}
    })

    dialogRef.afterClosed().subscribe(
      resoult => {
        if(resoult== "success"){
          this.getAll();
          console.log(this.getAll())
        }
      }
    )
  }

  polozenPredmet(id){

    console.log(id);
    this.polaganjePredmetaService.polozenPredmet(id).subscribe(
      success=>{this.getAll()
      this.snackBarService.openSnackBar("Ucenik je polozio", "ok")},

      error => console.log(error)
    )
  }
}
