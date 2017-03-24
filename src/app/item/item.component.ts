import {Component, Input, OnInit} from '@angular/core';
import {ItemConfig} from '../config';

export interface ItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

export class Item {
  get config(): ItemConfig {
    return this._config;
  }

  public id: number;
  public name: string;
  public description: string;
  public imageURL: string;
  public price: number;


  constructor(data: ItemData, private _config: ItemConfig) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.imageURL = data.imageURL;
    this.price = data.price;
    console.log('item created');

  }
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() public item: Item;
  constructor() {
    console.log('item component created');
  }

  public get id(): number {
    return this.item.id;
  }


  public get name(): string {
    return this.item.name;
  }


  public get description(): string {
    return this.item.description;
  }


  public get price(): string {
    return `${this.item.config.currencySymbol} ${String(this.item.price.toFixed(2))}`;
  }


  public get imageURL(): string {
    return `${this.item.config.imagePath}${this.item.imageURL}`;
  }

  public get priceClasses(): string {
    if (this.item.price > this.item.config.expensivePrice) {
      return 'text-danger';
    }
    return '';
  }

  ngOnInit() {
  }

}
