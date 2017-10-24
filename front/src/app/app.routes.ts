import { Routes, RouterModule } from '@angular/router'

//import { AppComponent } from './app.component'
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component'
import { HomeComponent } from './home/home.component'

const routes : Routes = [

   // Rota raiz /
   {
      path: '',
      component: HomeComponent
   },

   // Rota /home
   {
    path: 'home',
    component: HomeComponent
    },

   // Rota /tarefas
   {
      path: 'tarefas',
      component: TarefasListaComponent
   }

]

export const RoutingModule = RouterModule.forRoot(routes)