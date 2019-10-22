import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from  '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { PComponent } from './p/p.component';

const appRoutes:Routes =[
  {path:'pay',component:PayComponent},
  {path:'p',component:PComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    PComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
