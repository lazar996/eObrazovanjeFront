import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredmetiService } from '../services/predmeti.service';
import { Predmeti } from '../interface/predmeti';
import { PredmetDialog } from './predmet.dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthenticationService } from '../security/authentication.service';
import { SnackBarService } from '../services/snack-bar.service';
@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(private predmetiService: PredmetiService,
    private dialog: MatDialog,
    private router: Router,
   
    private snackBarService: SnackBarService) { }

  predmeti: Predmeti[];
  loggedIn: boolean = false;
  role: string;
  ngOnInit(): void {

    this.ucitavanjePredmeta();
    
    this.getAll();

  }


  openDialog(mode: string, predmet: Predmeti = <Predmeti>{}) {
    const dialogRef = this.dialog.open(PredmetDialog, {
      width: '400px',
      data: { mode: mode, predmet: predmet },
    });
    dialogRef.afterClosed().subscribe(resoult => {
      if (resoult == "success") {
        this.getAll();
      }
    })
  }
  ucitavanjePredmeta() {

    this.predmetiService.allPredmeti().subscribe(
      success => {
        this.predmeti = success;
        console.log(this.predmeti)

      },
      error => console.error(error)



    )
  }
  getAll(): void {
    this.predmetiService.allPredmeti().subscribe(
      response => this.predmeti = response,
      error => console.log(error)
    )
  }

  deletePredmet(predmet: Predmeti): void {
    {
      this.predmetiService.deletePredmet(predmet).subscribe(
        success => {
          this.getAll();
          this.snackBarService.openSnackBar("Predmet uspesno izbrisan", "Delete")
        },
        error => this.snackBarService.openSnackBar("Problem sa brisanjem predmeta!", "Problem!")
      )
    }
  }
  openPredmet(predmet: Predmeti): void {
    this.router.navigate(['/predmet-info'], { queryParams: { id: predmet.predmetId } });
  }
}


