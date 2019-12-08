import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredmetiService } from '../services/predmeti.service';
import { Predmeti } from '../interface/predmeti';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthenticationService } from '../security/authentication.service';
@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(private predmetiService: PredmetiService,
                             private dialog:MatDialog,
                             private router:Router,
                            private authService:AuthenticationService) { }

  predmeti: Predmeti[];
  loggedIn:boolean=false;
  role:string;
  ngOnInit() :void{
    
    this.ucitavanjePredmeta();
    this.loggedIn=this.authService.isLoggedIn();
    this.role=this.authService.getRole();
    this.getAll();
    if(this.role=="ucenik"){
      this.getAll();
    }
  }

 
  ucitavanjePredmeta(){

    this.predmetiService.allPredmeti().subscribe(
      success => {
        this.predmeti = success;
        console.log(this.predmeti)

      },
      error => console.error(error)
      
      

    )
  }
  getAll():void{
    this.predmetiService.allPredmeti().subscribe(
      response=>this.predmeti=response,
      error=>console.log(error)
    )
  }

  

}


