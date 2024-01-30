import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './products.modal';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemSubject = new BehaviorSubject<Product[]>([]);
  cartItem$ = this.cartItemSubject.asObservable();

  addToCart(item: any): void {
    const currentCart = this.cartItemSubject.value;
    const updatedCart = [...currentCart, item];
    this.cartItemSubject.next(updatedCart);
  }

  getCartItems(): Product[] {
    return this.cartItemSubject.value;
  }
}
