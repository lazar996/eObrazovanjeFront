import { Component, OnInit } from '@angular/core';
import { NastavniciService } from '../services/nastavnici.service';
import { Nastavnici } from '../interface/nastavnici';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-nastavnici',
  templateUrl: './nastavnici.component.html',
  styleUrls: ['./nastavnici.component.css']
})
export class NastavniciComponent implements OnInit {

  constructor(private nastavniciService: NastavniciService) { }
  nastavnici: Nastavnici[];
  ngOnInit() {

    this.ucitavanjeNastavnika();
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
  }


