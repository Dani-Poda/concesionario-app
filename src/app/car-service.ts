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
      imagen: 'https://www.carpro.com/hubfs/car-review-blog/review_337163_1.jpeg.jpg',
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
      imagen: 'https://www.autonocion.com/wp-content/uploads/2019/07/Prueba-Volkswagen-Golf-GTI-TCR-2019-7-930x620.jpg',
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
      imagen: 'https://impx.hwntcdn.com/i/raw:1/plain/https://composer.hwntcdn.com/193/used/bmw-3-series-20-320d-m-sport-shadow-edition-euro-6-s-s-4dr-34938-ytbjhr5m.jpg',
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
      imagen: 'https://files.ekmcdn.com/hazzydayzshop/images/audi-a4-avant-2021-2.0-tdi-35-s-line-163ps-s-tronic-euro-6-ulez-11432-p.jpeg',
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
      imagen: 'https://images1.autocasion.com/actualidad/wp-content/uploads/2019/07/Prueba-del-Mercedes-C200-de-gasolina-2019-Rub%C3%A9n-Fidalgo-1.jpg',
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
      imagen: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/20-ford-focus-2019-lt-static.jpg?itok=MfSLsAtu',
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
      imagen: 'https://www.autonocion.com/wp-content/uploads/2021/06/prueba-seat-leon-tdi-ext19-930x559.jpg',
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
      imagen: 'https://hips.hearstapps.com/hmg-prod/images/mazda-cx5-my2020-13-1592825407.jpg?crop=0.699xw:0.525xh;0.301xw,0.387xh&resize=640:*',
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
      imagen: 'https://imagenes.autobild.es/files/image_1920_1080/uploads/imagenes/2023/05/29/68cea1ca2f782.jpeg',
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
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5FrJXAWNRj7RnelAUp7Gfc2q8q9viZ9pEA&s',
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
