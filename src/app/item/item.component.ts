import { Component, OnInit } from '@angular/core';
import { ItemConfig } from '../config';

interface ItemData {
  id: number;
  name: string;
  description: string;
  price: number;
  imageURL: string;
}

class Item {
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

  }
}

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(public item: Item) {
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
    return `${this.item.config.currencySymbol} ${String(this.item.price)}`;
  }


  public get imageURL(): string {
    return `${this.item.config.imagePath}${this.item.imageURL}`;
  }

  ngOnInit() {
  }

}