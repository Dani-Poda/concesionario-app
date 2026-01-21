import { Component, OnInit } from '@angular/core';
import { Car, CarService } from '../car-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent implements OnInit{
  cocheDestacados: Car[] = [];

  constructor(
    private carService: CarService
  ){};

  ngOnInit() {
      this.cocheDestacados = this.carService.getCars().filter(car => car.destacado);
    }
}
