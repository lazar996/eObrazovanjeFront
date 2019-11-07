import { Component, OnInit } from '@angular/core';
import { DokumentaService } from '../services/dokumenta.service';
import { Dokument } from '../interface/Dokumenta';
@Component({
  selector: 'app-dokumenta',
  templateUrl: './dokumenta.component.html',
  styleUrls: ['./dokumenta.component.css']
})
export class DokumentaComponent implements OnInit {

  constructor(private dokumentaService:DokumentaService) { }
  dokumenti:Dokument[];
  ngOnInit() {

    this.ucitavanjeDokumenata();
  }



  
  ucitavanjeDokumenata(){
    this.dokumentaService.allDokumenta().subscribe(
      success => {
        this.dokumenti = success;
        console.log(this.dokumenti);
      },
      error=> console.log(error)
    )
  }
}
