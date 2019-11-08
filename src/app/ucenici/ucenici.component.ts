import { Component, OnInit } from '@angular/core';
import { UceniciService } from '../services/ucenici.service';
import { Ucenici } from '../interface/ucenici';

@Component({
  selector: 'app-ucenici',
  templateUrl: './ucenici.component.html',
  styleUrls: ['./ucenici.component.css']
})
export class UceniciComponent implements OnInit {

  constructor(private uceniciService: UceniciService) { }
  ucenici: Ucenici[];

  ngOnInit() {
    this.ucitavanjeUcenika();
  }

  ucitavanjeUcenika(){

    this.uceniciService.allUcenici().subscribe(

      success => {

        this.ucenici = success;

        console.log(this.ucenici)
      },
      error => console.error(error)
      
    )
  }
}
