import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class Status {
  public _id : string;
  public descricao : string;
}

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) { }

  listarTodos() {
    return this.http.get('http://localhost:3000/status');
  }

}
