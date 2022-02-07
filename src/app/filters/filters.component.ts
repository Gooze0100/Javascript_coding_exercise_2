import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  mainFilter: Object[] = ['Small', 'Medium', 'Large', 'SUV', 'Van'];
  moreFilter: Object[] = [
    'Pickup Truck',
    'Luxury',
    'Convertible',
    'Commercial',
  ];
  mainPrices: Object[] = [192, 240, 271, 270, 483];
  morePrices: Object[] = [314, 369, 473, 664];

  constructor() {}

  ngOnInit(): void {}
}
