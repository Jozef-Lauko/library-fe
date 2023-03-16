import { Component } from '@angular/core';
import {Category} from "../model/category.model";

import {CategoryService} from "../service/category/category.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {
  categories: Array<Category>= [];
  category?: Category;

  constructor(private service: CategoryService) {
    this.getCategories();
  }

  createCategory(category: Category) {
    this.service.createCategory(category).subscribe(()=>{
      console.log("Create category OK");
      this.getCategories();
    })
  }

  updateCategory(category: Category) {
    this.service.updateCategory(category).subscribe(()=>{
      console.log("Update category OK");
      this.getCategories();
    })
  }

  selectCategoryToUpdate(categoryId: number): void {
    this.service.getCategory(categoryId).subscribe((category: Category) =>{
      this.category = category;
    })
  }

  deleteCategory(categoryId: number): void {
    this.service.deleteCategory(categoryId).subscribe(() =>{
      console.log("Delete category OK");
      this.getCategories();
    })
  }


  private getCategories() {
    this.service.getCategories().subscribe((categories: Category[]) =>{
      this.categories = categories;
    })
  }
}
