import { Product } from '../products.modal';
import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItem$.subscribe(items => {
      this.cartItems = items;
    });
  }
  getCartSummary(): void {
    const summary: any[] = [];

    this.cartItems.forEach(item => {
      const existingItem = summary.find(summaryItem => summaryItem.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        summary.push({ ...item, quantity: 1 })
      }
    })
  }
}