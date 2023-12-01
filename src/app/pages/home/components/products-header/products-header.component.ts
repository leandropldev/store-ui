import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit{
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'desc';
  itemsShowCount= 12;

  constructor() {}
  ngOnInit(): void {}

  onSortUpdate(newSort: string): void{
    this.sort = newSort;
  }

  onItemsUpdate(newNumber: number): void {
    this.itemsShowCount = newNumber;
  }

  onColumnsUpdated(colsNumber: number) :void {
    this.columnsCountChange.emit(colsNumber);
  }
}
