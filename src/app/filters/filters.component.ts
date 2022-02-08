import { Component, OnInit } from '@angular/core';
import { mainFilter, moreFilter } from './filters.data';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public mainFilter: Object[] = mainFilter;
  public moreFilter: Object[] = moreFilter;
  public reset: boolean = false;
  public notChecked: boolean = true;
  public checked: boolean = false;
  public selected: string = '';

  constructor() {}

  ngOnInit(): void {}
}
