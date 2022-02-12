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
  public checked: boolean = false;
  public box: boolean = false;
  public selected: string = '';
  public toggle = false;

  constructor() {}
  backgroundRule(job) {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {}
}
