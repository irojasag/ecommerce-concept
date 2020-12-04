import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.scss'],
})
export class BestSellerComponent implements OnInit {
  public bestSellers = [
    {
      name: 'Samsung S20',
      price: '$699.99',
      url:
        'https://images-na.ssl-images-amazon.com/images/I/712iyingLrL._AC_SX679_.jpg',
    },
    {
      name: 'Samsung A01',
      price: '$50',
      favorite: true,
      url:
        'https://images-na.ssl-images-amazon.com/images/I/61ff%2BrZThyL._AC_SY679_.jpg',
    },
    {
      name: 'OnePlus 7 Pro',
      price: '$479.00',
      favorite: true,
      url:
        'https://images-na.ssl-images-amazon.com/images/I/5192g8ZJNcL._AC_SY879_.jpg',
    },
    {
      name: 'OnePlus 7T',
      price: '$284.99',
      url:
        'https://images-na.ssl-images-amazon.com/images/I/515Gr9NBXUL._AC_SX679_.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
