import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../services/korisnici.service';
import { Korisnici } from '../interface/korisnici';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {

  constructor(private korisniciService: KorisniciService) { }
  korisnici: Korisnici[];
  ngOnInit() {
    this.ucitavanjeKorisnika();
  }


  ucitavanjeKorisnika(){

    this.korisniciService.allKorisnici().subscribe(
      success =>{
        this.korisnici = success;
        console.log(this.korisnici)

      },
      error=> console.error(error)
      )
      
    
  }
}
