import { Component } from '@angular/core';
import { Car, CarService } from '../car-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../favorites-service';

@Component({
  selector: 'app-products-detail-component',
  imports: [CommonModule],
  templateUrl: './products-detail-component.html',
  styleUrl: './products-detail-component.css',
})
export class ProductsDetailComponent {
  carId: number = 0;
  car: Car | undefined;

  constructor(
    private carService: CarService,
    private route: ActivatedRoute,
    private favoriteService: FavoritesService
  ){
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    this.car = this.carService.getCarById(this.carId);
  }

  addFavorite(){
    if(this.car){
      this.favoriteService.addFavorite(this.car);
      alert('Coche añadido a favoritos');
    }
    
  }
}
