import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from "../../model/category.model";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  @Input() categories: Array<Category> = [];
  @Output() categoryToUpdate = new EventEmitter<number>();
  @Output() categoryToDelete = new EventEmitter<number>();

  updateCategory(categoryId: number): void {
    this.categoryToUpdate.emit(categoryId);
  }

  deleteCategory(categoryId: number): void {
    this.categoryToDelete.emit(categoryId);
  }
}
