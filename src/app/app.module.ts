import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AngularFire, AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';
import { ItemComponent } from './item/item.component';
import { PageComponent } from './page/page.component';
import {ItemConfig} from './config';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    PageComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)

  ],
  providers: [ItemConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
