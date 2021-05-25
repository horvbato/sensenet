import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ITEMS } from '../mock-items'
import { ItemService } from '../item.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  selectedItem?: Item;
  onSelect(item: Item): void {
  this.selectedItem = item;
}

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems
  }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(items => this.items = items);
  }

}
