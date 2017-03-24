import {Component, OnInit, Output} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Item, ItemData} from '../item/item.component';
import {ItemConfig} from '../config';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Output() items: FirebaseListObservable<ItemData[]>;
  constructor(private af: AngularFire, private _itemConfig: ItemConfig) {
    this.items = af.database.list('/items');
    console.log('items loaded.');
  }

  createItem(itemData: ItemData) {
    return new Item(itemData, this._itemConfig);
  }

  ngOnInit() {
  }

}
