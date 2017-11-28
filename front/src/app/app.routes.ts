import { Routes, RouterModule } from '@angular/router'

import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { TarefasFormComponent } from './tarefas-form/tarefas-form.component'

import { StatusListaComponent } from './status-lista/status-lista.component'
import { StatusFormComponent } from './status-form/status-form.component'

import { ProjetosListaComponent } from './projetos-lista/projetos-lista.component';
import { ProjetosFormComponent } from './projetos-form/projetos-form.component';

import { HomeComponent } from './home/home.component'

const routes : Routes = [

   // Rota raiz /
   { path: '', component: HomeComponent },

   // Rota /home
   { path: 'home', component: HomeComponent },

   // Rota /tarefas
   { path: 'tarefas', component: TarefasListaComponent },
   { path: 'tarefas/novo', component: TarefasFormComponent },
   { path: 'tarefas/:id', component: TarefasFormComponent },

    //Rota /status
    { path: 'status', component: StatusListaComponent },
    { path: 'status/novo', component: StatusFormComponent },
    { path: 'status/:id', component: StatusFormComponent},

    //Rota /projetos
    { path: 'projetos', component: ProjetosListaComponent },
    { path: 'projetos/novo', component: ProjetosFormComponent },
    { path: 'projetos/:id', component: ProjetosFormComponent}

]

export const RoutingModule = RouterModule.forRoot(routes)