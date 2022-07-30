import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts;

  constructor(
    private http: HttpService
    ) { }

  getCart(): void {
    this.http.getCartItems().subscribe((data: any) => {
      this.carts = data.data;
      console.log(this.carts);
    });
  }
  emptyCart(): void {
    this.http.emptyCart().subscribe(() => { 
      this.getCart();
      alert('Cart Emptied');
    });
  }
  ngOnInit(): void {
    this.getCart();
  }

}
