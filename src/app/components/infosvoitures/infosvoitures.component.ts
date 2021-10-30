import { Component, OnInit } from '@angular/core';
import { VoitureService } from 'src/app/services/voiture.service';
import { Voiture } from 'src/app/model/voiture';
@Component({
  selector: 'app-infosvoitures',
  templateUrl: './infosvoitures.component.html',
  styleUrls: ['./infosvoitures.component.css']
})
export class InfosvoituresComponent implements OnInit {

  lesvoitures: Voiture[] = [];

  constructor(private voitureService: VoitureService) {}

  ngOnInit(): void {
    this.lesvoitures = this.voitureService.getVoitures();
  }
}
