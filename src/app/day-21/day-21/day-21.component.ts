import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-day-21',
  templateUrl: './day-21.component.html',
  styleUrls: ['./day-21.component.scss']
})
export class Day21Component {
  constructor(private snackBar: MatSnackBar) {

  }

  products: any[] = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest model with cutting-edge',
      price: 299,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Voice Cancellation',
      description: 'features and sleek design.',
      price: 399,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Smartphone 2',
      description: 'its new Latest smart phone .',
      price: 199,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'watch',
      description: 'Latest watch with uniq designs.',
      price: 99,
      image: 'https://via.placeholder.com/150',
    },

  ]
  cart: { id: number; name: string; price: number }[] = [];

  onAddToCard(product: any) {
    this.cart.push(product)

  }

  getCartTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
