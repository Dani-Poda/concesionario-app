import { Injectable } from '@angular/core';
import { Car } from './car-service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favorites: Car[] = [];

  getFavorites(): Car[] {
    return [...this.favorites]
  }

  addFavorite(car: Car): void {
    const exists = this.favorites.some(c => c.id === car.id);
    if (!exists) {
      this.favorites.push(car);
    }
  }
  
  removeById(carId: number): void {
    this.favorites = this.favorites.filter(car => car.id !== carId);
  }
}
