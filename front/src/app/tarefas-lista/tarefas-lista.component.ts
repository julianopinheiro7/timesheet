import { Component, OnInit } from '@angular/core';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-tarefas-lista',
  templateUrl: './tarefas-lista.component.html',
  styleUrls: ['./tarefas-lista.component.css'],
  providers: [TarefasService]
})
export class TarefasListaComponent implements OnInit {

  private tarefas: any

  constructor(private service: TarefasService) { }

  ngOnInit() {
    this.atualizarLista()
  }

  atualizarLista() {
    this.service.listarTodos().subscribe(dados => this.tarefas = dados)
  }

  excluir(id: string) {
    if (confirm('Deseja realmente excluir esta tarefa?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }
  }

}
