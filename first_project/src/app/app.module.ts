import { HomeModule } from './home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    //importa o modulo que foi exportado para poder ser usado aqui
    // HomeModule, //removido por que sera usado via lazy load
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
