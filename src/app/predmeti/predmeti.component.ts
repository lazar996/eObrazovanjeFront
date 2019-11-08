import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PredmetiService } from '../services/predmeti.service';
import { Predmeti } from '../interface/predmeti';

@Component({
  selector: 'app-predmeti',
  templateUrl: './predmeti.component.html',
  styleUrls: ['./predmeti.component.css']
})
export class PredmetiComponent implements OnInit {

  constructor(private predmetiService: PredmetiService) { }
  predmeti: Predmeti[];
  ngOnInit() {

    this.ucitavanjePredmeta();
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

}
