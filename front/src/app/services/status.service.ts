import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Status {
  public _id : string;
  public descricao : string;
}

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/status');
  }

  public salvar(dados: Status) {
    //status já existente
    if(dados._id) {
      return this.http.put('http://localhost:3000/status', dados);
    }
    //status novo
    else {
      return this.http.post('http://localhost:3000/status', dados);
    }
  }

  public obterporID(id: string) {
    return this.http.get('http://localhost:3000/status/'+ id);
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/status/' + id);
  }

}
