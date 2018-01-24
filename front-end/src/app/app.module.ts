import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ItemComponent } from './item/item.component';
import { HeadphoneComponent } from './headphone/headphone.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ItemComponent,
    HeadphoneComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule,
    RouterModule.forRoot([
      { path : '', component : MainComponent },
      { path : 'item', component : ItemComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
