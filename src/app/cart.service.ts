import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemSubject = new BehaviorSubject<any[]>([]);
  cartItem$ = this.cartItemSubject.asObservable();

  addToCart(item: any): void {
    const currentCart = this.cartItemSubject.value;
    const updatedCart = [...currentCart, item];
    this.cartItemSubject.next(updatedCart);
  }

  getCartItems(): any[] {
    return this.cartItemSubject.value;
  }
}
