import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'app-suppemployes',
  templateUrl: './suppemployes.component.html',
  styleUrls: ['./suppemployes.component.css']
})
export class SuppemployesComponent implements OnInit {

  lesemployes:Employe[] = []; //declaration du tableau vide 
  constructor(private employeService:EmployeService) {
   } 
//initialisation des variable
  ngOnInit(): void { 
    this.lesemployes = this.employeService.getEmploye();//ici on remplit le tableau
   
  } 

  onsupprime()
  {
    this.lesemployes.shift();
  }
}
