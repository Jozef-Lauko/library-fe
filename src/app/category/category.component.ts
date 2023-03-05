import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Menu} from "../app.component";
import {Category} from "../model/category.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent {

  menu = Menu;
  actualMenu: Menu = Menu.CATEGORIES;

  categories: Array<Category>= [];
  category?: Category;

  createCategory(category: Category) {
    this.categories.push(category);
  }

  updateCategory(tmp: Category) {
    const index = this.categories.findIndex(
      category => category.id === tmp.id);
    if (index !== -1) {
      this.categories[index] = tmp;
    }
  }

  selectCategoryToUpdate(categoryId: number): void {
    this.category = this.categories.find(
      category => category.id === categoryId);
  }

  deleteCategory(categoryId: number): void {
    const index = this.categories.findIndex(category =>
      category.id === categoryId);
    if (index !== -1) { this.categories.splice(index, 1); }
  }
}
