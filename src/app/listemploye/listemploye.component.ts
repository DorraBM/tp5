import { Component, Input, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service'; 
@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrls: ['./listemploye.component.css']
})
export class ListemployeComponent implements OnInit {
  lesemployes:Employe[] = []; //declaration du tableau vide 
  constructor(private employeService:EmployeService) {
   } 
//initialisation des variable
  ngOnInit(): void { 
    this.lesemployes = this.employeService.getEmploye();//ici on remplit le tableau
   
  } 

}
