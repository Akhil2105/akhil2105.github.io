import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  addToCart(arg0: string) {
    throw new Error('Method not implemented.');
  }

  products = [
    { "name": "Pixel X Pro", "price": 699.99, "description": "A high-performance smartphone with a stunning camera and sleek design." },
    { "name": "BrewMaster Elite", "price": 89.95, "description": "Brew your favorite coffee at home with this stylish and efficient coffee maker." },
    { "name": "SonicSound 5000", "price": 129.99, "description": "Immerse yourself in music with these comfortable and noise-canceling wireless headphones." },
    { "name": "FitPulse Pro", "price": 49.95, "description": "Stay active and monitor your health with this feature-packed fitness tracker." },
    { "name": "RoboSweep Max", "price": 199.00, "description": "Keep your home clean effortlessly with this smart and efficient robot vacuum." },
    { "name": "JamSync Mini", "price": 39.99, "description": "Take your music anywhere with this compact and powerful Bluetooth speaker." },
    { "name": "ComfortZone Luxe", "price": 179.95, "description": "Work comfortably for hours with this ergonomically designed office chair." },
    { "name": "ShutterStar Pro", "price": 499.00, "description": "Capture stunning moments with this high-resolution digital camera." },
    { "name": "GameMaster X9000", "price": 299.99, "description": "Experience the latest gaming adventures with this advanced gaming console." },
    { "name": "CulinaryCraft Deluxe", "price": 129.95, "description": "Upgrade your kitchen with this durable and stylish cookware set." },
    { "name": "EcoHeat SmartHub", "price": 129.00, "description": "Save energy and control your home's temperature with this smart thermostat." },
    { "name": "VentureGear Explorer", "price": 79.99, "description": "Stay organized on the go with this spacious and versatile travel backpack." },
    { "name": "SparkDazzle SonicCare", "price": 49.95, "description": "Achieve optimal oral hygiene with this advanced electric toothbrush." },
    { "name": "PowerFlow Infinity", "price": 29.99, "description": "Charge your devices wirelessly with this sleek and convenient charging pad." },
    { "name": "CrispMaster Pro", "price": 89.99, "description": "Cook healthier meals with less oil using this efficient air fryer." },
    { "name": "SecureView Guardian", "price": 149.00, "description": "Monitor your home remotely with this high-definition smart security camera." },
    { "name": "ZenFlex ComfortPro", "price": 24.95, "description": "Enhance your yoga practice with this non-slip and comfortable yoga mat." },
    { "name": "ReadLite Oasis", "price": 119.99, "description": "Carry your library in your pocket with this lightweight Kindle e-reader." },
    { "name": "SkyCapture Explorer", "price": 299.00, "description": "Explore the skies and capture aerial views with this camera-equipped drone." },
    { "name": "SoundWave Freedom", "price": 69.99, "description": "Enjoy wire-free audio with these stylish and high-quality Bluetooth earbuds." }
  ];
}
