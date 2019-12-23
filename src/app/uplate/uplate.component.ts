import { Component, OnInit } from '@angular/core';
import { UplataService } from '../services/uplata.service';
import { Uplata } from '../interface/uplata';

@Component({
  selector: 'app-uplate',
  templateUrl: './uplate.component.html',
  styleUrls: ['./uplate.component.css']
})
export class UplateComponent implements OnInit {

  constructor(private uplateService: UplataService) { }


  uplate: Uplata[];
  ngOnInit() {

    this.ucitavanjeUplata();
    
  }


  ucitavanjeUplata(){

      this.uplateService.allUplate().subscribe(
        success => {

          this.uplate = success;
        },

        error => console.log(error)
      )

  }

}
