import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public categoriesList = [
    {
      content: 'mobile',
      title: 'Phones',
      active: true,
    },
    {
      content: 'laptop',
      title: 'Computer',
    },
    {
      content: 'heartbeat',
      title: 'Health',
    },
    {
      content: 'book',
      title: 'Books',
    },
    {
      content: 'home',
      title: 'Home',
    },
    {
      content: 'paw',
      title: 'Pets',
    },
    {
      content: 'tshirt',
      title: 'Cloth',
    },
    {
      content: 'baby',
      title: 'Baby',
    },
    {
      content: 'gamepad',
      title: 'Toys',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  public activateCategory(category): void {
    this.categoriesList.forEach((cat) => {
      if (cat.title === category.title) {
        cat.active = true;
      } else {
        cat.active = false;
      }
    });
  }
}
