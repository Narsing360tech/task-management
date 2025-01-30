import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  @Input() cart: { id: number; name: string; price: number }[] = [];
  @Input() cartTotal: number = 0;
}
