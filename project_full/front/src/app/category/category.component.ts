import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {CategoryService} from '../category.service';
import { Location } from '@angular/common';
import {Category} from '../categories';
import {Product} from '../products';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
 
  products: Product[] ;
  categories: Category[];
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getBooksCategoryList();
    this.getId();
    this.getBooksByCategory();
    // this.getProd();
    // this.getCateg();
    // // this.getCategoryProduct();
    }
    getId(): void{
      this.id = +this.route.snapshot.paramMap.get('category_id');
    }
    getBooksByCategory(): void{
      this.categoryService.getCategoryBookList(this.id)
        .subscribe(products => this.products = products);
    }
    getBooksCategoryList(): void{
      this.categoryService.getCategoryList()
        .subscribe(categories => this.categories = categories);
    }
    // getProd() {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.productService.getCategoryBookList(id).subscribe(products => this.products = products);
    // }
  
    // getCateg() {
    //   const id = +this.route.snapshot.paramMap.get('id');
    //   this.categoryService.getCategoryDetail(id).subscribe(category => this.category = category);
    // }
  // getCategoryProduct() :void {
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.productService.getCategoryBookList(id)
  //     .subscribe(products => this.products = products);
  // }

  // getCategoryProduct() {
  //   let id = this.route.snapshot.paramMap.get('id');
  //   id = id.substr(1);
  //   this.productService.getCategoryBookList(id)
  //     .subscribe(products => {
  //       this.products = products;
  //     });
  // }
}


  

 
