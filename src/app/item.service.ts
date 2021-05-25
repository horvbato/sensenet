import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Item } from './item';
import { ITEMS } from './mock-items'
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    this.messageService.add('ItemService: fetched items');
    return items;
  }

  getItem(id: number): Observable<Item> {
    const item = ITEMS.find(i => i.id === id)!;
    this.messageService.add(`ItemService: fetched item id=${id}`);
    return of(item);
  }

  constructor(private messageService: MessageService) { }
}
