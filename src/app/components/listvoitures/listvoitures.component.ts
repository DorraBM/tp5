import { Component, OnInit } from '@angular/core';
import { Voiture } from 'src/app/model/voiture';
import { VoitureService } from 'src/app/services/voiture.service';

@Component({
  selector: 'app-listvoitures',
  templateUrl: './listvoitures.component.html',
  styleUrls: ['./listvoitures.component.css'],
})
export class ListvoituresComponent implements OnInit {
  lesvoitures: Voiture[] = [];
  v: Voiture | undefined ;
  nbr: number = 0;
 


  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {}
  Marquelist(n: string) {
    this.lesvoitures =this.voitureService.getVoitureByMarque(n);
    this.nbr=0
  }
  nombre() {
    this.nbr= this.voitureService.getNbVoitures('Clio');
    this.lesvoitures=[];
  }
  nummatricule(n: string) {
    this.v= this.voitureService.getVoitureByNumSerie(n);
   
    this.lesvoitures=[];
    this.nbr=0
  }

}
