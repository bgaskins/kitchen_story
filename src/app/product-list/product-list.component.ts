import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Product {

  constructor (
    public id: number,
    public item: string,
    public price: number,
  ){

  }
}
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  ) { }

  public searchItem: any = '';
  public query
  
  
  products = [
    {id: 1, item: 'Lemonade Seltzer', price: 7},
    {id: 2, item: 'Sparkling Water', price: 11},
    {id: 3, item: 'Macintosh Apple', price: 1},
    {id: 4, item: 'Kiwi', price: 2},
    {id: 5, item: 'Orange', price: 1},
    {id: 6, item: 'Banana Bundle', price: 3},
    {id: 7, item: 'Watermelon', price: 4},
    {id: 8, item: 'Grape Bundle', price: 5},
    {id: 9, item: 'Organic Cheeze Pizza', price: 5},
    {id: 10, item: 'Black Bean Burrito',price: 2},
    {id: 11, item: 'Potato Pancakes', price: 10},
    {id: 12, item: 'Frozen Green Smoothie', price: 8},
    {id: 13, item: 'Farmer Dave Choc. Ice Cream', price: 4},
    {id: 14, item: 'Leomonade Popsicles', price: 3}
  ];


  ngOnInit() {
  }

}
