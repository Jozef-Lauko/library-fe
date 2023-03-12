import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../model/category.model";

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent {
  form: FormGroup;

  @Output() formCreate = new EventEmitter<Category>();
  @Output() formUpdate = new EventEmitter<Category>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required)
    })
  }

  saveCategory(): void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareCategory(this.form.controls.id.value))
      } else {
        this.formCreate.emit(this.prepareCategory());
      }
      this.form.reset();
    }
  }

  private prepareCategory(id?: number): Category {
    return {
      id: id !== undefined ? id : Date.now(),
      title: this.form.controls.title.value
    }
  }

  @Input()
  set CategoryData(category: Category | undefined) {
    if (category) {
      this.form.setValue(category);
    }
  }
}
