import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/models/CartModel';
import { CourseModel } from 'src/app/models/CourseModel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: CartModel[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
    });
  }

  addItemToCart(item: CourseModel): void {
    this.cartService.addToCart(item);
  }

  removeItemFromCart(item: CartModel): void {
    this.cartService.removeFromCart(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
