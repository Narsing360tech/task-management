import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  @Input() products: { id: number; name: string; price: number }[] = [];
  @Output() addToCart = new EventEmitter<any>();

  onAdd(product: any) {
    this.addToCart.emit(product);
    console.log("product added to the cart ");
  }

}
