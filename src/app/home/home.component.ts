import { Component, OnInit } from '@angular/core';
import { Person } from '../entities';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  list:Person[] = [];

  constructor(private personService:PersonService){}

  ngOnInit(): void {
    
    this.personService.fetchAll().subscribe(data => this.list = data);
    
  }

}
