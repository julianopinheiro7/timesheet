import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Usuarios {
  public _id : string;
  public nomeUsuario : string;
  public email : string;  
  public perfilAcesso : string;
  public dataCadastro : string; 
}

@Injectable()
export class UsuariosService {

  constructor(private http: HttpClient) { }

  public listarTodos() {
    return this.http.get('http://localhost:3000/usuarios');
  }

  public salvar(dados: Usuarios) {
    //usuario já existente
    if(dados._id) {
      return this.http.put('http://localhost:3000/usuarios', dados);
    }
    //usuario novo
    else {
      return this.http.post('http://localhost:3000/usuarios', dados);
    }
  }
  
  public obterporID(id: string) {
    return this.http.get('http://localhost:3000/usuarios/'+ id);
  }

  public excluir(id: string) {
    return this.http.delete('http://localhost:3000/usuarios/' + id);
  }

}
