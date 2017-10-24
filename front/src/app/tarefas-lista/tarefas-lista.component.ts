import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarefas-lista',
  templateUrl: './tarefas-lista.component.html',
  styleUrls: ['./tarefas-lista.component.css']
})
export class TarefasListaComponent implements OnInit {

  private tarefas : any
  
  constructor(private http: HttpClient) { 
    this.http.get('http://localhost:3000/tarefas')
      .subscribe(dados => this.tarefas = dados)
  }

  ngOnInit() {
    
  }

}
