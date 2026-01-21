import { Injectable } from '@angular/core';

export interface Car {
  id: number,
  marca: string,
  modelo: string,
  year: number,
  precio: number,
  kilometraje: number,
  combustible: string,
  imagen: string,
  descripcion: string,
  destacado: boolean
}

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private cars: Car[]= [
  {
      id: 1,
      marca: 'Toyota',
      modelo: 'Corolla',
      year: 2020,
      precio: 18500,
      kilometraje: 45000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=Toyota+Corolla',
      descripcion: 'Berlina compacto en perfecto estado, único dueño, historial completo.',
      destacado: true
    },
    {
      id: 2,
      marca: 'Volkswagen',
      modelo: 'Golf GTI',
      year: 2019,
      precio: 24900,
      kilometraje: 32000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=VW+Golf+GTI',
      descripcion: 'Deportivo compacto con acabados premium y gran equipamiento.',
      destacado: true
    },
    {
      id: 3,
      marca: 'BMW',
      modelo: 'Serie 3 320d',
      year: 2018,
      precio: 28500,
      kilometraje: 58000,
      combustible: 'Diésel',
      imagen: 'https://via.placeholder.com/400x300?text=BMW+Serie+3',
      descripcion: 'Berlina premium con motor diésel eficiente y gran confort.',
      destacado: false
    },
    {
      id: 4,
      marca: 'Audi',
      modelo: 'A4 Avant',
      year: 2021,
      precio: 32000,
      kilometraje: 28000,
      combustible: 'Diésel',
      imagen: 'https://via.placeholder.com/400x300?text=Audi+A4',
      descripcion: 'Familiar espacioso con tecnología avanzada y bajo consumo.',
      destacado: true
    },
    {
      id: 5,
      marca: 'Mercedes-Benz',
      modelo: 'Clase C 200',
      year: 2019,
      precio: 29500,
      kilometraje: 42000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=Mercedes+C200',
      descripcion: 'Elegancia y tecnología en una berlina de lujo alemana.',
      destacado: false
    },
    {
      id: 6,
      marca: 'Ford',
      modelo: 'Focus ST',
      year: 2020,
      precio: 22000,
      kilometraje: 38000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=Ford+Focus+ST',
      descripcion: 'Compacto deportivo con gran dinamismo y equipamiento.',
      destacado: true
    },
    {
      id: 7,
      marca: 'Seat',
      modelo: 'León FR',
      year: 2021,
      precio: 21500,
      kilometraje: 25000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=Seat+Leon',
      descripcion: 'Compacto español con diseño deportivo y bajo consumo.',
      destacado: false
    },
    {
      id: 8,
      marca: 'Mazda',
      modelo: 'CX-5',
      year: 2020,
      precio: 26500,
      kilometraje: 35000,
      combustible: 'Diésel',
      imagen: 'https://via.placeholder.com/400x300?text=Mazda+CX5',
      descripcion: 'SUV compacto con diseño elegante y gran habitabilidad.',
      destacado: false
    },
    {
      id: 9,
      marca: 'Peugeot',
      modelo: '3008 GT Line',
      year: 2021,
      precio: 28000,
      kilometraje: 22000,
      combustible: 'Híbrido',
      imagen: 'https://via.placeholder.com/400x300?text=Peugeot+3008',
      descripcion: 'SUV híbrido con tecnología de vanguardia y bajo consumo.',
      destacado: true
    },
    {
      id: 10,
      marca: 'Renault',
      modelo: 'Megane RS',
      year: 2019,
      precio: 25500,
      kilometraje: 40000,
      combustible: 'Gasolina',
      imagen: 'https://via.placeholder.com/400x300?text=Renault+Megane+RS',
      descripcion: 'Compacto deportivo francés con prestaciones excepcionales.',
      destacado: false
    }
  ]

  getCars() {
    return this.cars;
  };

  getCarById(id: number) {
    return this.cars.find(car => car.id === id)
  };
}
