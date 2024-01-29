import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItem$.subscribe(items => {
      this.cartItems = items;
      console.log('Cart Items:', this.cartItems);
    });
  }
}