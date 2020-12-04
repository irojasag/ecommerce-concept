import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-seller-product',
  templateUrl: './best-seller-product.component.html',
  styleUrls: ['./best-seller-product.component.scss'],
})
export class BestSellerProductComponent implements OnInit {
  @Input() product: {
    name: string;
    price: string;
    url: string;
    favorite?: boolean;
  };
  constructor() {}

  ngOnInit(): void {}
}
