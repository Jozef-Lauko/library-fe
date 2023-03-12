import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  form: FormGroup;

  @Output() formCreate = new EventEmitter<Book>();
  @Output() formUpdate = new EventEmitter<Book>();

  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      title: new FormControl(null, Validators.required),
      authorFirstName: new FormControl(null, Validators.required),
      authorLastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      isbn: new FormControl(null, Validators.required),
      count: new FormControl(null, Validators.required)
    })
  }

  saveBook(): void {
    if(this.form.valid) {
      if(this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareBook(this.form.controls.id.value))
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.form.reset();
    }
  }

  private prepareBook(id?: number): Book {
    return {
      id: id !== undefined ? id : Date.now(),
      title: this.form.controls.title.value,
      authorFirstName: this.form.controls.authorFirstName.value,
      authorLastName: this.form.controls.authorLastName.value,
      isbn: this.form.controls.isbn.value,
      count: this.form.controls.count.value
    }
  }

  @Input()
  set BookData(book: Book | undefined) {
    if (book) {
      this.form.setValue(book);
    }
  }
}
