import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit, OnChanges, OnDestroy{
  form: FormGroup;


  constructor() {
    this.form = new FormGroup({
      id: new FormControl(null),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)])
    })

    console.log('CONSTRUCTOR');
    console.log('CONSTRUCTOR HELPDATA:', this.helpData);
  }

  @Output()
  formCreate = new EventEmitter<User>();
  @Output()
  formUpdate = new EventEmitter<User>();


  savePerson(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareUser(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    }
  }

  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      firstName: this.form.controls.firstName.value,
      lastName: this.form.controls.lastName.value,
    };
  }

  @Input()
  set personData(person: User | undefined) {
    if (person) {
      this.form.setValue(person);
    }
  }

  @Input()
  helpData?: string;

  @Input()
  set helpDataSetter(helpData: string) {
    if (helpData) {
      console.log('SETTER:', helpData);
    }
  }

  ngOnInit(): void {
    console.log('ON INIT');
    console.log('ON INIT HELP DATA:',
      this.helpData);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.helpData?.currentValue) {
      console.log('ON CHANGES HELP DATA:',
        this.helpData);
    }
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }
}
