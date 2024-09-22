import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartModel } from '../models/CartModel';
import { CourseModel } from '../models/CourseModel';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject: BehaviorSubject<CartModel[]> = new BehaviorSubject<
    CartModel[]
  >([]);
  public cart$: Observable<CartModel[]> = this.cartSubject.asObservable();

  constructor() {}

  getCart(): Observable<CartModel[]> {
    return this.cart$;
  }

  addToCart(item: CourseModel): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = [...currentCart, { courseId: item.id, course: item }];
  }

  removeFromCart(item: CartModel): void {
    const currentCart = this.cartSubject.value;
    const updatedCart = currentCart.filter(
      (cartItem) => cartItem.courseId !== item.courseId
    );
    this.cartSubject.next(updatedCart);
  }

  clearCart(): void {
    this.cartSubject.next([]);
  }
}
