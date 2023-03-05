import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../model/category.model";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  form: FormGroup;
  categories: Array<Category> = [];

  constructor() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required)
    })
  }

  saveCategory(): void{
    this.categories.push(this.form.value);
    this.form.reset();
  }

  editCategory(index: number):void {
    this.form.setValue(this.categories[index]);
    this.deleteCategory(index);
  }

  deleteCategory(index: number):void{
    this.categories.splice(index,1);
  }
}
