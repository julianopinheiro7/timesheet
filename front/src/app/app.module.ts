import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.routes';

import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component';
import { StatusListaComponent } from './status-lista/status-lista.component';
import { StatusFormComponent } from './status-form/status-form.component';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';
import { ProjetosListaComponent } from './projetos-lista/projetos-lista.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { UsuariosListaComponent } from './usuarios-lista/usuarios-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TarefasListaComponent,
    TarefasFormComponent,
    StatusListaComponent,
    StatusFormComponent,
    ProjetosFormComponent,
    ProjetosListaComponent,
    UsuariosFormComponent,
    UsuariosListaComponent
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
