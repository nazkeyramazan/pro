import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
// import { products } from './products';
import {HttpClient} from "@angular/common/http";
import{LoginResponse} from './categories';
import{Product} from './products';
import {Category} from './categories';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categories: Category[];
  constructor(private http: HttpClient) { }

  BASE_URL = 'http://localhost:8000';
  // getProduct(id: number): Observable<any> {
  //   return of(products.find(product => product.id === id));
  // }
  // getProducts(): Observable<any> {
  //   // 
  //   return this.http.get<Vacancy[]>(`${this.BASE_URL}/api/books/`);
  // }
  // getProductsByCategoryId(id: number): Observable<any> {
  //   return of(products.filter(product => product.category_id === id));
  // }

  
  getCategoryBookList(id): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/categories/${id}/books`);
  }
  // getProductofC(categoryId: number): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(`${this.BASE_URL}/api/categories/${categoryId}/products`);
  // }
  getBookList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.BASE_URL}/api/books/`);
  }

  getBookDetail(id): Observable<Product> {
    return this.http.get<Product>(`${this.BASE_URL}/api/books/${id}/`);
  }
  
  login(username, password): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.BASE_URL}/api/login/`, {
      username,
      password
    })
  }

}


// }