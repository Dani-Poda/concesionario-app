import { Component } from '@angular/core';
import { Car } from '../car-service';
import { FavoritesService } from '../favorites-service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart-component.html',
  styleUrl: './cart-component.css',
})
export class CartComponent {
  constructor(
    private favoriteService: FavoritesService
  ){};

  get items(){
    return this.favoriteService.getFavorites();
  }

  removeItem(carId: number){
    return this.favoriteService.removeById(carId);
  }
}
