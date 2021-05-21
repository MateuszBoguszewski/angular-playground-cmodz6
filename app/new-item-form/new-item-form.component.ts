import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Item } from '../shared/models/item.model';

@Component({
  selector: 'new-item-form',
  styleUrls: ['./new-item-form.component.scss'],
  templateUrl: './new-item-form.component.html'
})
export class NewItemFormComponent {
  public newItemForm = this.fb.group({
    name: ['', Validators.required],
    qty: ['', Validators.required],
    price: ['', Validators.required]
  });
  @Output()
  readonly newItem: EventEmitter<Item> = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    if (!this.newItemForm.valid) {
      return;
    }
    const { name, qty, price } = this.newItemForm.value;
    this.newItem.emit({
      name,
      qty,
      price
    });
  }
}
