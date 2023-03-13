import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "../../model/category.model";


@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  //  private url = 'http://labs.fpv.umb.sk:8080/api/category';
  private url = 'http://labs.fpv.umb.sk:8081/api/category';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.url);
  }

  getCategory(categoryId: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/${categoryId}`);
  }

  createCategory(category: Category): Observable<number> {
    return this.http.post<number>(this.url, category);
  }

  updateCategory(category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.url}/${category.id}`, category);
  }

  deleteCategory(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${categoryId}`);
  }
}
