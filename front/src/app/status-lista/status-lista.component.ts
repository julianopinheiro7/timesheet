import { Component, OnInit } from '@angular/core';
import { StatusService } from '../services/status.service'

@Component({
  selector: 'app-status-lista',
  templateUrl: './status-lista.component.html',
  styleUrls: ['./status-lista.component.css'],
  providers: [StatusService]
})
export class StatusListaComponent implements OnInit {

  private status: any;

  constructor(private service: StatusService) { }

  ngOnInit() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.service.listarTodos().subscribe(dados => this.status = dados)
  }
  
  excluir(id: string) {    
    if(confirm('Deseja realmente excluir este status?')) {
      this.service.excluir(id).subscribe(
        () => this.atualizarLista(),
        erro => console.error(erro)
      )
    }
  }

}
