import { Component, OnInit } from '@angular/core';
import { PredmetiService } from '../services/predmeti.service';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SnackBarService } from '../services/snack-bar.service';
import { Predmeti } from '../interface/predmeti';
import { AuthenticationService } from '../security/authentication.service';

@Component({
  selector: 'app-pohadjanjepredmeta',
  templateUrl: './pohadjanjepredmeta.component.html',
  styleUrls: ['./pohadjanjepredmeta.component.css']
})
export class PohadjanjepredmetaComponent implements OnInit {

  constructor(private predmetiService: PredmetiService,
    private dialog: MatDialog,
    private router: Router,
    private snackBarService: SnackBarService,
    private authService: AuthenticationService) { }


 
  loggenIn: boolean = false;
  role: string;
  predmeti: Predmeti[];
  
  ngOnInit(): void {

    this.loggenIn = this.authService.isLoggedIn();
    this.role = this.authService.getRole();
    console.log(this.role)
    if (this.role != "ucenik") {
      this.ucitavanjePredmeta();

      this.getAll();
    }
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

  openPredmet(predmet: Predmeti): void {
    this.router.navigate(['/pohadjanje-list'], { queryParams: { id: predmet.predmetId } });
  }
}
