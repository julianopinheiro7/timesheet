import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { HomeComponent } from './home/home.component';

import { RoutingModule } from './app.routes'
import { MaterializeModule } from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    TarefasListaComponent,
    HomeComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    MaterializeModule    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
