import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Projetos {
  public _id : string;
  public nomeProjeto : string;
  public dataSolicitacao : string;  
  public quantidadeHoras : number;
  public dataConclusao : string; 
}

@Injectable()
export class ProjetosService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/projetos');
  }

  public salvar(dados: Projetos) {
    //projeto já existente
    if(dados._id) {
      return this.http.put('http://localhost:3000/projetos', dados);
    }
    //projeto novo
    else {
      return this.http.post('http://localhost:3000/projetos', dados);
    }
  }
  
  public obterporID(id: string) {
    return this.http.get('http://localhost:3000/projetos/'+ id);
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/projetos/' + id);
  }

}
