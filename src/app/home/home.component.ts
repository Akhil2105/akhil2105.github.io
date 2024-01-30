import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';
import productsMock from './mocks/products.json';
import { Product } from '../products.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  household: number = 0;
  mobile: number = 0;
  accs: number = 0;
  filteredProducts: Product[] | undefined;

  constructor(private cartService: CartService) { }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.products = productsMock;
    this.updateCategoryCounts();
  }

  private updateCategoryCounts(): void {
    this.household = this.getCountByCategory('Household');
    this.mobile = this.getCountByCategory('Mobile');
    this.accs = this.getCountByCategory('Accessories');
  }

  getCountByCategory(category: string): number {
    return this.products.filter(product => product.category === category).length;
  }

  onRadioButtonSelection(category: string): void {
    this.filteredProducts = (category === 'All') ? this.products : this.filterProductsByCategory(category);
  }

  private filterProductsByCategory(category: string): Product[] {
    return this.products.filter(product => product.category === category);
  }
}
