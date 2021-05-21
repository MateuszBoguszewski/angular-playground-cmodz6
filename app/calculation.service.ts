import { Injectable } from '@angular/core';
import { Item } from './shared/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CalculationService {
  constructor() {}

  public calculateTotal(data: Item[]): number {
    return data.map(item => item.price * item.qty).reduce((a, b) => a + b);
  }
}
