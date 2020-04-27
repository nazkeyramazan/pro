import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { Category } from '../categories';
// import {categories} from '../categories';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  categories: Category[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategoryList().subscribe(categories => this.categories = categories);
  }

}
