import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  All: any;
  household: any;
  mobile: any;
  accs: any;
  selectedRadioButton: string = 'All';
  filteredProducts: any[] | undefined;

  products = [
    { "name": "Pixel X Pro", "price": 699.99, "category": "Mobile", "description": "A high-performance smartphone with a stunning camera and sleek design." },
    { "name": "BrewMaster Elite", "price": 89.95, "category": "Household", "description": "Brew your favorite coffee at home with this stylish and efficient coffee maker." },
    { "name": "SonicSound 5000", "price": 129.99, "category": "Electronics", "description": "Immerse yourself in music with these comfortable and noise-canceling wireless headphones." },
    { "name": "FitPulse Pro", "price": 49.95, "category": "Health & Fitness", "description": "Stay active and monitor your health with this feature-packed fitness tracker." },
    { "name": "RoboSweep Max", "price": 199.00, "category": "Household", "description": "Keep your home clean effortlessly with this smart and efficient robot vacuum." },
    { "name": "JamSync Mini", "price": 39.99, "category": "Electronics", "description": "Take your music anywhere with this compact and powerful Bluetooth speaker." },
    { "name": "ComfortZone Luxe", "price": 179.95, "category": "Furniture", "description": "Work comfortably for hours with this ergonomically designed office chair." },
    { "name": "ShutterStar Pro", "price": 499.00, "category": "Electronics", "description": "Capture stunning moments with this high-resolution digital camera." },
    { "name": "GameMaster X9000", "price": 299.99, "category": "Electronics", "description": "Experience the latest gaming adventures with this advanced gaming console." },
    { "name": "CulinaryCraft Deluxe", "price": 129.95, "category": "Kitchen", "description": "Upgrade your kitchen with this durable and stylish cookware set." },
    { "name": "EcoHeat SmartHub", "price": 129.00, "category": "Home Automation", "description": "Save energy and control your home's temperature with this smart thermostat." },
    { "name": "VentureGear Explorer", "price": 79.99, "category": "Travel", "description": "Stay organized on the go with this spacious and versatile travel backpack." },
    { "name": "SparkDazzle SonicCare", "price": 49.95, "category": "Health & Fitness", "description": "Achieve optimal oral hygiene with this advanced electric toothbrush." },
    { "name": "PowerFlow Infinity", "price": 29.99, "category": "Electronics", "description": "Charge your devices wirelessly with this sleek and convenient charging pad." },
    { "name": "CrispMaster Pro", "price": 89.99, "category": "Kitchen", "description": "Cook healthier meals with less oil using this efficient air fryer." },
    { "name": "SecureView Guardian", "price": 149.00, "category": "Home Security", "description": "Monitor your home remotely with this high-definition smart security camera." },
    { "name": "ZenFlex ComfortPro", "price": 24.95, "category": "Health & Fitness", "description": "Enhance your yoga practice with this non-slip and comfortable yoga mat." },
    { "name": "ReadLite Oasis", "price": 119.99, "category": "Electronics", "description": "Carry your library in your pocket with this lightweight Kindle e-reader." },
    { "name": "SkyCapture Explorer", "price": 299.00, "category": "Electronics", "description": "Explore the skies and capture aerial views with this camera-equipped drone." },
    { "name": "SoundWave Freedom", "price": 69.99, "category": "Electronics", "description": "Enjoy wire-free audio with these stylish and high-quality Bluetooth earbuds." }
  ];

  ngOnInit(): void {
    this.All = this.products.length;
    this.household = this.products.filter(product => product.category === 'Household').length;
    this.mobile = this.products.filter(product => product.category === 'Mobile').length;
    this.accs = this.products.filter(product => product.category === 'Accessories').length;
  }

  onRadioButtonSelection(category: string) {
    this.selectedRadioButton = category;

    this.filteredProducts = (category === 'All') ? this.products : this.products.filter(product => product.category === category);
  }
  constructor(private cartService: CartService) { }
  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }
}

