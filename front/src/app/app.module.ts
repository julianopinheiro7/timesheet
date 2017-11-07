import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { HomeComponent } from './home/home.component';

import { RoutingModule } from './app.routes'
import { MaterializeModule } from 'angular2-materialize';
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TarefasListaComponent,
    HomeComponent,
    TarefasFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    MaterializeModule    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
