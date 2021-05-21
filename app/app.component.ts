import { Component, OnInit } from '@angular/core';
import { CalculationService } from './calculation.service';
import { Item } from './shared/models/item.model';

@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public data: Item[] = [
    { name: 'Test 1', qty: 2, price: 10.5 },
    { name: 'Test 2', qty: 1, price: 2 },
    { name: 'Test 3', qty: 4, price: 100 },
    { name: 'Test 4', qty: 5, price: 5 }
  ];
  public total: number;

  constructor(private calculationService: CalculationService) {}

  ngOnInit(): void {
    this.calculateTotal();
  }

  public onSubmit(newItem: { name: string; qty: number; price: number }) {
    this.data.push(newItem);
    this.calculateTotal();
  }

  private calculateTotal(): void {
    this.total = this.calculationService.calculateTotal(this.data);
  }
}
