import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Classe que representa o model no front-end
export class Tarefa {
  public _id: string;
  public chamado: number;
  public data: string;
  public solicitante: string;
  public projeto: string;
  public descricao: string;
  public status: string;
  public tempo: number;
}

@Injectable()
export class TarefasService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/tarefas');
  }

  public salvar(dados: Tarefa) {
    //Tarefa já existente.
    if(dados._id) {
      return this.http.put('http://localhost:3000/tarefas', dados);
    }
    // Tarefa nova
    else { 
      return this.http.post('http://localhost:3000/tarefas', dados);
    }
  }

  public obterporID(id: string) {
    return this.http.get('http://localhost:3000/tarefas/'+ id);
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/tarefas/' + id);
  }

}
