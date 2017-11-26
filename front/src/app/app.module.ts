import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.routes';
// import { MaterializeModule } from 'angular2-materialize';

import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';

import { StatusListaComponent } from './status-lista/status-lista.component';
import { StatusFormComponent } from './status-form/status-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarefasListaComponent,
    TarefasFormComponent,
    StatusListaComponent,
    StatusFormComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
