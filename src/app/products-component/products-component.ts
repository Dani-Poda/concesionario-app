import { Component } from '@angular/core';
import { Car, CarService } from '../car-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './products-component.html',
  styleUrl: './products-component.css',
})
export class ProductsComponent {
  constructor(
    private carService: CarService
  ){}

  get cars(){
    return this.carService.getCars();
  }
}
